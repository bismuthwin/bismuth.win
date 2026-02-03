<script lang="ts">
	import '../app.css';
	import './layout.css';

	import favicon from '$lib/assets/logo.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import { page } from '$app/state';
	import LogoOverlay from '$lib/components/logoOverlay.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<LogoOverlay />
<main>
	{#if page.url.pathname != '/'}
		<Navbar />
	{/if}
	{@render children()}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
