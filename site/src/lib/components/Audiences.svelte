<script lang="ts">
	import { audiences } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section">
	<div class="shell">
		<div class="head" use:reveal>
			<p class="eyebrow">{audiences.eyebrow}</p>
			<h2 class="section-heading">{audiences.heading}</h2>
		</div>

		<div class="grid">
			{#each audiences.items as item, i (item.title)}
				<article use:reveal={i * 100}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		margin-top: clamp(2.5rem, 5vw, 3.5rem);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	article {
		background: var(--sand-soft);
		border-radius: 14px;
		padding: clamp(1.5rem, 3vw, 2.1rem);
	}

	h3 {
		font-size: 1.2rem;
	}

	p {
		margin-top: 0.9rem;
		font-size: 0.95rem;
		color: var(--ink-soft);
	}

	@media (max-width: 860px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
