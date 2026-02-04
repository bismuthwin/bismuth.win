<script lang="ts">
	import LogoOverlay from '$lib/components/logoOverlay.svelte';
	import SocialLink from '$lib/components/socialLink.svelte';

	const title = 'BISMUTH';
	const description =
		'A small group of friends creating and developing all sorts of stuff together';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<h1 class="title">
		{#each title as letter}
			<span>{letter}</span>
		{/each}
		<br />
	</h1>
	<h2 class="description">
		{#each description.split(' ') as word, i}
			<span>{word}</span>{i < description.split(' ').length - 1 ? ' ' : ''}
		{/each}
	</h2>

	<div class="routes">
		<a href="/projects" class="route"><h3>Projects</h3></a>
		<a href="/servers" class="route"><h3>Servers</h3></a>
		<a href="/team" class="route"><h3>Team</h3></a>
		<a href="/about" class="route"><h3>About</h3></a>
	</div>

	<div class="links">
		<SocialLink href="https://steamcommunity.com/groups" label="steam" disabled>
			<i class="hn hn-steam"></i>
		</SocialLink>
		<SocialLink href="https://github.com/bismuthwin" label="github">
			<i class="hn hn-github"></i>
		</SocialLink>
		<SocialLink href="https://cat.basil.florist" label="github">
			<img src="tequila.jpg" alt="cat" />
		</SocialLink>
		<SocialLink href="https://www.youtube.com/watch?v=fq3abPnEEGE" label="mystery">
			<i class="hn hn-question-solid"></i>
		</SocialLink>
	</div>
</div>

<style>
	.title,
	.description {
		text-align: center;
		color: var(--color-text);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		user-select: none;

		& span {
			transition: color 0.3s ease;
			&:hover {
				color: var(--color-accent);
				cursor: default;
			}

			&:active {
				transition: color 0s ease;
				color: #ff4343;
			}
		}
	}

	.title {
		font-size: 8rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		animation: slideInTop 1s ease-out forwards;
	}

	.description {
		font-size: 1.5rem;
		animation: slideInBottom 1s ease-out forwards;
	}

	.routes {
		display: flex;
		margin-top: 2rem;
		animation: appearLater 1.5s ease-in forwards;

		.route {
			margin: 1rem;
			color: black;
			padding: 1rem 2rem;
			background-color: white;
			text-decoration: none;
			text-align: center;
			font-size: 1.5rem;
			transition:
				background-color 0.3s ease,
				color 0.3s ease;

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
	}

	.links {
		margin-top: 2rem;
		display: flex;
		gap: 1.5rem;
		animation: appearLater 1.5s ease-in forwards;
	}

	@keyframes slideInTop {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideInBottom {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes appearLater {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.title {
			font-size: 4rem;
		}

		.description {
			font-size: 1rem;
		}

		.routes {
			flex-direction: column;
			align-items: center;

			.route {
				width: 100%;
				margin: 0.5rem 0;
				font-size: 1.2rem;
				padding: 0.75rem 1.5rem;
			}
		}
	}
</style>
