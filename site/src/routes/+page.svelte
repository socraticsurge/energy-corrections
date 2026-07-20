<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Problem from '$lib/components/Problem.svelte';
	import Method from '$lib/components/Method.svelte';
	import Audiences from '$lib/components/Audiences.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import About from '$lib/components/About.svelte';
	import Closing from '$lib/components/Closing.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { business, hero } from '$lib/content';

	const title = `${business.name} — ${business.practice} & Scientific Vastu`;
	const description = `${hero.headline} ${hero.headlineAccent} Vastu and energy corrections for homes, businesses and factories, with no demolition or renovation. ${business.servingNote}.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<main>
	<Hero />
	<Problem />
	<Method />
	<Audiences />
	<Testimonials />
	<About />
	<Closing />
</main>

<Footer />
