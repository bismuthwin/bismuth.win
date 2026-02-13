<script>
	// https://www.reddit.com/r/sveltejs/comments/1e1bcb6/how_you_guys_manage_metadataseo_in_svelte_kit/lcswtoq/
	import { page } from '$app/state';

	export let title = 'BISMUTH';
	export let description =
		'A small group of friends creating and developing all sorts of stuff together ';
	// export let image = 'https://bismuth.win/your-logo.png';

	$: title = title || 'BISMUTH';
	$: description =
		description || 'A small group of friends creating and developing all sorts of stuff together ';
</script>

<svelte:head>
	<title>{title} | bismuth.win</title>
	<meta name="description" content={description} />
	<meta property="og_site_name" content="bismuth.win”" />
	<meta property="og:url" content="https://bismuth.win{page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content={image} /> -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="“bismuth.win" />
	<meta property="twitter:url" content="https://bismuth.win{page.url.pathname.toString()}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content={image} /> -->
	{@html `  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title} | BISMUTH",
   "url": "https//bismuth.win${page.url.pathname}"}</script>`}
</svelte:head>
