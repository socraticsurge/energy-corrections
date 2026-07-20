<script lang="ts">
	import { hero, whatsappLink, business } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="hero" id="top">
	<div class="wash" aria-hidden="true"></div>

	<div class="shell inner">
		<p class="tag" use:reveal={0}>{hero.eyebrow}</p>

		<h1 use:reveal={80}>
			{hero.headline}<br />
			<em>{hero.headlineAccent}</em>
		</h1>

		<p class="body" use:reveal={160}>{hero.body}</p>

		<div class="actions" use:reveal={240}>
			<a class="btn btn-primary" href={whatsappLink} target="_blank" rel="noopener">
				{hero.cta}
				<span class="arrow" aria-hidden="true">→</span>
			</a>
			<span class="note">{business.servingNote}</span>
		</div>

		<dl class="stats" use:reveal={320}>
			{#each hero.stats as stat (stat.label)}
				<div class="stat">
					<dt>{stat.value}</dt>
					<dd>{stat.label}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(4rem, 10vw, 7.5rem) clamp(3.5rem, 8vw, 6rem);
	}

	/* Soft concentric rings — an energy field, drawn restrained. */
	.wash {
		position: absolute;
		top: -28%;
		left: 50%;
		translate: -50% 0;
		width: min(120vw, 1100px);
		aspect-ratio: 1;
		border-radius: 50%;
		background:
			radial-gradient(circle, rgba(138, 154, 123, 0.16) 0%, rgba(138, 154, 123, 0) 62%),
			radial-gradient(circle, rgba(181, 100, 60, 0.09) 0%, rgba(181, 100, 60, 0) 45%);
		pointer-events: none;
	}

	.inner {
		position: relative;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--forest);
		background: rgba(138, 154, 123, 0.2);
		padding: 0.5rem 1.1rem;
		border-radius: 999px;
	}

	h1 {
		font-size: clamp(2.5rem, 7vw, 4.6rem);
		margin-top: 2rem;
		max-width: 16ch;
	}

	h1 em {
		font-style: italic;
		font-weight: 400;
		color: var(--terracotta);
	}

	.body {
		margin-top: 1.75rem;
		max-width: 54ch;
		font-size: clamp(1rem, 1.7vw, 1.15rem);
		color: var(--ink-soft);
	}

	.actions {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.note {
		font-size: 0.85rem;
		color: var(--ink-faint);
	}

	.stats {
		margin: clamp(3.5rem, 8vw, 5.5rem) 0 0;
		padding-top: 2.5rem;
		border-top: 1px solid var(--rule);
		width: 100%;
		max-width: 52rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.stat dt {
		font-family: var(--serif);
		font-size: clamp(1.15rem, 2.4vw, 1.7rem);
		font-weight: 600;
		color: var(--forest);
		line-height: 1.2;
	}

	.stat dd {
		margin: 0.45rem 0 0;
		font-size: 0.78rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}

	@media (max-width: 640px) {
		.stats {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem 1rem;
		}
	}
</style>
