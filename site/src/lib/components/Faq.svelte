<script lang="ts">
	import { faq } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section" id="questions">
	<div class="shell inner">
		<div class="head" use:reveal>
			<p class="eyebrow">{faq.eyebrow}</p>
			<h2 class="section-heading">{faq.heading}</h2>
		</div>

		<div class="list">
			{#each faq.items as item, i (item.q)}
				<!-- Native <details> so the answers are in the DOM for crawlers even
				     when collapsed, and keyboard-operable without any JS. -->
				<details use:reveal={i * 60} open={i === 0}>
					<summary>
						<span>{item.q}</span>
						<span class="sign" aria-hidden="true"></span>
					</summary>
					<p>{item.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<style>
	.inner {
		display: grid;
		grid-template-columns: minmax(0, 22rem) minmax(0, 1fr);
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	.head {
		position: sticky;
		top: 7rem;
	}

	.list {
		border-top: 1px solid var(--rule);
	}

	details {
		border-bottom: 1px solid var(--rule);
	}

	summary {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1.4rem 0;
		cursor: pointer;
		list-style: none;
		font-family: var(--serif);
		font-size: clamp(1.02rem, 1.9vw, 1.2rem);
		font-weight: 600;
		line-height: 1.4;
		color: var(--forest);
		transition: color 0.2s ease;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:hover {
		color: var(--terracotta);
	}

	/* A plus that becomes a minus, drawn in CSS so there is no icon payload. */
	.sign {
		position: relative;
		flex: none;
		width: 1rem;
		height: 1rem;
		margin-top: 0.28rem;
	}

	.sign::before,
	.sign::after {
		content: '';
		position: absolute;
		inset: 50% 0 auto 0;
		height: 1.5px;
		background: var(--terracotta);
		transition: transform 0.25s ease;
	}

	.sign::after {
		transform: rotate(90deg);
	}

	details[open] .sign::after {
		transform: rotate(0deg);
	}

	details p {
		margin: 0;
		padding: 0 0 1.5rem;
		max-width: 60ch;
		color: var(--ink-soft);
		font-size: 0.97rem;
	}

	@media (max-width: 860px) {
		.inner {
			grid-template-columns: 1fr;
		}
		.head {
			position: static;
		}
	}
</style>
