<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Problem from '$lib/components/Problem.svelte';
	import Method from '$lib/components/Method.svelte';
	import Audiences from '$lib/components/Audiences.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import About from '$lib/components/About.svelte';
	import Closing from '$lib/components/Closing.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import StickyCta from '$lib/components/StickyCta.svelte';
	import { business, site } from '$lib/content';
	import { buildJsonLd } from '$lib/seo';

	// Leads with the differentiator rather than the job title, because
	// "vastu consultant" alone is a term we cannot outrank.
	const title = 'Vastu Energy Corrections Without Demolition | Koundinya Nemana';

	const description = `Vastu and energy corrections for homes, offices and factories, with no demolition and no renovation. Imbalances measured with a Lecher antenna. ${business.clientsServed}+ places corrected since ${business.since}. Based in Hyderabad, serving India and abroad.`;

	const jsonLd = buildJsonLd();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="{business.practice} by {business.name}" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content="{site.url}/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_IN" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site.url}/og.png" />

	<meta name="author" content={business.name} />
	<meta name="geo.region" content="IN-TG" />
	<meta name="geo.placename" content="Hyderabad" />

	{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

<Header />

<main>
	<Hero />
	<Problem />
	<Method />
	<Audiences />
	<Testimonials />
	<Faq />
	<About />
	<Closing />
</main>

<Footer />
<StickyCta />
