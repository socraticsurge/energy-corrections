<script lang="ts">
	import { base } from '$app/paths';
	import { about, business, whatsappLink } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section about" id="about">
	<div class="shell inner">
		<div class="portrait" use:reveal>
			<!-- The photograph is a transparent cutout, so it sits directly on the
			     section background with a soft disc behind it rather than in a box. -->
			<div class="frame">
				<span class="disc" aria-hidden="true"></span>
				<img src="{base}/koundinya.webp" alt="Koundinya Nemana" width="450" height="445" />
			</div>
			<p class="caption">{business.baseCity}</p>
		</div>

		<div class="copy" use:reveal={100}>
			<p class="eyebrow">{about.eyebrow}</p>
			<h2 class="section-heading">{about.heading}</h2>

			{#each about.paragraphs as para (para)}
				<p class="para">{para}</p>
			{/each}

			<a class="btn btn-outline" href={whatsappLink} target="_blank" rel="noopener">
				{about.cta}
				<span class="arrow" aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.about {
		background: var(--sand-soft);
	}

	.inner {
		display: grid;
		grid-template-columns: minmax(0, 20rem) minmax(0, 1fr);
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	.portrait {
		position: sticky;
		top: 7rem;
	}

	.frame {
		position: relative;
		display: grid;
		place-items: end center;
	}

	/* A soft sage disc, sized to sit behind the head and shoulders. */
	.disc {
		grid-area: 1 / 1;
		align-self: center;
		width: 92%;
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(
			circle at 50% 45%,
			rgba(138, 154, 123, 0.42),
			rgba(138, 154, 123, 0.16) 68%,
			rgba(138, 154, 123, 0) 72%
		);
	}

	.frame img {
		grid-area: 1 / 1;
		position: relative;
		width: 100%;
		height: auto;
		/* The cutout ends in a hard horizontal line at the jacket; dissolve the
		   last few percent so it settles into the background instead. */
		mask-image: linear-gradient(to bottom, #000 88%, transparent 100%);
	}

	.caption {
		margin-top: 0.9rem;
		font-size: 0.8rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}


	.para {
		margin-top: 1.4rem;
		color: var(--ink-soft);
		max-width: 60ch;
		font-size: 1rem;
	}

	.para:first-of-type {
		margin-top: 1.75rem;
		font-size: 1.1rem;
		color: var(--ink);
	}

	.btn {
		margin-top: 2.25rem;
	}

	@media (max-width: 860px) {
		.inner {
			grid-template-columns: 1fr;
		}
		.portrait {
			position: static;
			max-width: 14rem;
		}
	}
</style>
