<script lang="ts">
	import { base } from '$app/paths';
	import { testimonials } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section" id="clients">
	<div class="shell">
		<div class="head" use:reveal>
			<p class="eyebrow">{testimonials.eyebrow}</p>
			<h2 class="section-heading">{testimonials.heading}</h2>
		</div>

		<div class="wall">
			{#each testimonials.items as person, i (person.name)}
				<figure use:reveal={(i % 2) * 90}>
					<blockquote>{person.quote}</blockquote>
					<figcaption>
						<img
							src="{base}/testimonials/{person.image}"
							alt=""
							width="48"
							height="48"
							loading="lazy"
						/>
						<span>
							<strong>{person.name}</strong>
							<small>{person.title}</small>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.wall {
		margin-top: clamp(2.5rem, 5vw, 3.5rem);
		columns: 2;
		column-gap: 1.25rem;
	}

	figure {
		break-inside: avoid;
		margin: 0 0 1.25rem;
		background: #fff;
		border: 1px solid var(--rule);
		border-radius: 14px;
		padding: clamp(1.5rem, 3vw, 2rem);
	}

	blockquote {
		margin: 0;
		font-size: 0.97rem;
		line-height: 1.75;
		color: var(--ink-soft);
	}

	blockquote::before {
		content: '“';
		font-family: var(--serif);
		font-size: 2.5rem;
		line-height: 0;
		color: var(--sage);
		vertical-align: -0.35em;
		margin-right: 0.15rem;
	}

	figcaption {
		margin-top: 1.5rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--rule);
		display: flex;
		align-items: center;
		gap: 0.85rem;
	}

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
		flex: none;
		background: var(--sand-soft);
	}

	figcaption span {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	strong {
		font-size: 0.92rem;
		font-weight: 600;
	}

	small {
		font-size: 0.78rem;
		color: var(--ink-faint);
		line-height: 1.45;
		margin-top: 0.15rem;
	}

	@media (max-width: 860px) {
		.wall {
			columns: 1;
		}
	}
</style>
