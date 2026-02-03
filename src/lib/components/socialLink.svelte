<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		label: string;
		children: Snippet;
		newWindow?: boolean;
		disabled?: boolean;
	}

	export const { href, label, children, newWindow = true, disabled = false } = $props() as Props;
</script>

<a
	class="socialIcon"
	{href}
	{...newWindow ? { target: '_blank' } : {}}
	aria-label={label}
	{...disabled ? { 'aria-disabled': 'true', tabindex: -1 } : {}}
>
	{@render children()}
</a>

<style>
	.socialIcon {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 4rem;
		width: 4rem;
		height: 4rem;
		background-color: white;
		color: black;
		transition: all 0.3s ease;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		image-rendering: pixelated;
	}

	.socialIcon:hover {
		color: white;
		cursor: pointer;
		background-color: var(--color-accent);
		filter: brightness(1.1);
	}

	.socialIcon:active {
		transition: color 0s ease;
		background-color: #ff4343;
		color: #ff4343;
	}

	.socialIcon[aria-disabled='true'] {
		pointer-events: none;
		opacity: 0.2;
	}
</style>
