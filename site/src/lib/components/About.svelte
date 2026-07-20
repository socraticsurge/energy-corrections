<script lang="ts">
	import { about, business, whatsappLink } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section about" id="about">
	<div class="shell inner">
		<div class="portrait" use:reveal>
			<!-- Replace this block with <img src="{base}/koundinya.jpg" alt="Koundinya Nemana" />
			     once a photograph is available. -->
			<div class="placeholder" aria-hidden="true">
				<span>KN</span>
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

	.placeholder {
		aspect-ratio: 4 / 5;
		border-radius: 16px;
		background: linear-gradient(160deg, var(--sage), var(--forest));
		display: grid;
		place-items: center;
	}

	.placeholder span {
		font-family: var(--serif);
		font-size: 3rem;
		color: rgba(255, 255, 255, 0.85);
		letter-spacing: 0.05em;
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
