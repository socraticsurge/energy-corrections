<script lang="ts">
	import { method } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section on-dark" id="approach">
	<div class="shell">
		<div class="head" use:reveal>
			<p class="eyebrow">{method.eyebrow}</p>
			<h2 class="section-heading">{method.heading}</h2>
			<p class="lede">{method.body}</p>
		</div>

		<ol class="steps">
			{#each method.steps as step, i (step.number)}
				<li use:reveal={i * 110}>
					<span class="num">{step.number}</span>
					<h3>{step.title}</h3>
					<p>{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.head {
		max-width: 44rem;
	}

	.steps {
		list-style: none;
		margin: clamp(2.75rem, 6vw, 4.5rem) 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.steps li {
		border-top: 1px solid rgba(217, 200, 174, 0.28);
		padding-top: 1.75rem;
	}

	.num {
		font-family: var(--serif);
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		color: var(--sand);
	}

	.steps h3 {
		font-size: clamp(1.15rem, 2.1vw, 1.4rem);
		margin-top: 0.85rem;
	}

	.steps p {
		margin-top: 0.85rem;
		font-size: 0.95rem;
		color: rgba(238, 230, 216, 0.72);
	}

	@media (max-width: 760px) {
		.steps {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
