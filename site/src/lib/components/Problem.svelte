<script lang="ts">
	import { problem } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section" id="problem">
	<div class="shell">
		<div class="head" use:reveal>
			<p class="eyebrow">{problem.eyebrow}</p>
			<h2 class="section-heading">{problem.heading}</h2>
			<p class="lede">{problem.body}</p>
		</div>

		<div class="grid">
			{#each problem.factors as factor, i (factor.title)}
				<article class="card" use:reveal={i * 110}>
					<span class="index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<h3>{factor.title}</h3>
					<p class="sub">{factor.subtitle}</p>
					<p class="copy">{factor.body}</p>
				</article>
			{/each}
		</div>

		<p class="closing" use:reveal>{problem.closing}</p>
	</div>
</section>

<style>
	.head {
		max-width: 46rem;
	}

	.grid {
		margin-top: clamp(2.5rem, 6vw, 4rem);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.card {
		background: #fff;
		border: 1px solid var(--rule);
		border-radius: 14px;
		padding: clamp(1.6rem, 3vw, 2.4rem);
		position: relative;
	}

	.index {
		font-family: var(--serif);
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--terracotta);
		letter-spacing: 0.05em;
	}

	.card h3 {
		font-size: clamp(1.25rem, 2.3vw, 1.6rem);
		margin-top: 0.9rem;
	}

	.sub {
		font-size: 0.85rem;
		color: var(--terracotta);
		font-style: italic;
		margin-top: 0.3rem;
	}

	.copy {
		margin-top: 1.1rem;
		color: var(--ink-soft);
		font-size: 0.97rem;
	}

	.closing {
		margin-top: clamp(2.5rem, 5vw, 3.5rem);
		padding-left: 1.5rem;
		border-left: 2px solid var(--sage);
		max-width: 60ch;
		font-family: var(--serif);
		font-size: clamp(1.05rem, 2vw, 1.3rem);
		line-height: 1.55;
		color: var(--forest);
	}

	@media (max-width: 760px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
