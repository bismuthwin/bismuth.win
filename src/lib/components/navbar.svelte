<script lang="ts">
	import { page } from '$app/state';

	interface NavLink {
		href: string;
		label: string;
	}

	const navLinks: NavLink[] = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/servers', label: 'Servers' },
		{ href: '/team', label: 'Team' },
		{ href: '/about', label: 'About' }
	];
</script>

<nav>
	<a class="brandName" href="/">BISMUTH</a>
	<div class="linksRight">
		{#each navLinks as { href, label }}
			<a class="navLink" data-active={page.url.pathname === href ? 'true' : 'false'} {href}
				>{label}</a
			>
		{/each}
	</div>
</nav>

<style>
	nav {
		top: 0;
		left: 0;
		width: 100%;
		height: 4rem;
		background-color: #111;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 0 1rem;
		gap: 1rem;
	}

	.linksRight {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		position: absolute;
		right: 1rem;
	}

	.brandName {
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		text-decoration: none;
		transition: color 0.3s ease;

		&:hover {
			cursor: pointer;
			color: var(--color-accent);
		}

		&:active {
			transition: color 0s ease;
			color: #ff4343;
		}
	}

	.navLink {
		color: black;

		color: black;
		padding: 0.5rem 1rem;
		background-color: white;
		text-decoration: none;
		font-size: 1.2rem;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;

		&[data-active='true'] {
			color: var(--color-accent);
			font-weight: bold;
		}

		&:hover {
			background-color: var(--color-accent);
			color: white;
			cursor: pointer;
		}

		&:active {
			transition: background-color 0s ease;
			background-color: #ff4343;
			border-color: #ff4343;
		}
	}
</style>
