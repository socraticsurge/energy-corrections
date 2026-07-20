<script lang="ts">
	import { base } from '$app/paths';
	import '$lib/styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
	<meta name="theme-color" content="#2C3A2E" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Inter:wght@400;500;600&display=swap"
	/>
</svelte:head>

{@render children()}
