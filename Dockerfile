# ---- deps ----
FROM oven/bun:1 AS deps
WORKDIR /app

# Install deps (cache-friendly)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# ---- build ----
FROM oven/bun:1 AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# SvelteKit build (adapter-node => outputs /build)
RUN bun run build

# ---- run ----
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# If you have runtime deps (not fully bundled), keep node_modules:
COPY --from=build /app/node_modules ./node_modules

# adapter-node output
COPY --from=build /app/build ./build
# (optional) if you need files like package.json for runtime metadata
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

# adapter-node entrypoint
CMD ["bun", "build/index.js"]
