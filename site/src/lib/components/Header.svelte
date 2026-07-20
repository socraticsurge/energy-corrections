<script lang="ts">
	import { business, nav, whatsappLink } from '$lib/content';

	let scrolled = $state(false);
	let menuOpen = $state(false);
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY > 24)} />

<header class="header" class:scrolled>
	<div class="shell bar">
		<a class="brand" href="#top">
			<span class="mark" aria-hidden="true"></span>
			<span class="brand-text">{business.name}</span>
		</a>

		<nav class="links" aria-label="Primary">
			{#each nav as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<a class="btn btn-primary cta" href={whatsappLink} target="_blank" rel="noopener">
			Book an assessment
		</a>

		<button
			class="toggle"
			aria-expanded={menuOpen}
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class:open={menuOpen}></span>
		</button>
	</div>

	{#if menuOpen}
		<nav class="drawer" aria-label="Mobile">
			{#each nav as item (item.href)}
				<a href={item.href} onclick={() => (menuOpen = false)}>{item.label}</a>
			{/each}
			<a class="drawer-cta" href={whatsappLink} target="_blank" rel="noopener">
				Book an assessment
			</a>
		</nav>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(247, 244, 238, 0.82);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
	}

	.header.scrolled {
		border-bottom-color: var(--rule);
		box-shadow: 0 1px 24px rgba(61, 54, 48, 0.05);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 2rem;
		height: 4.5rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		font-family: var(--serif);
		font-size: 1.05rem;
		font-weight: 600;
		margin-right: auto;
	}

	/* A sun/compass glyph — grounded, not mystical. */
	.mark {
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		border: 1.5px solid var(--terracotta);
		position: relative;
		flex: none;
	}

	.mark::after {
		content: '';
		position: absolute;
		inset: 3px;
		border-radius: 50%;
		background: var(--terracotta);
	}

	.links {
		display: flex;
		gap: 2rem;
	}

	.links a {
		font-size: 0.9rem;
		color: var(--ink-soft);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.links a:hover {
		color: var(--ink);
	}

	.cta {
		padding: 0.75rem 1.35rem;
		font-size: 0.85rem;
	}

	.toggle {
		display: none;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--rule);
		border-radius: 8px;
		background: transparent;
		cursor: pointer;
		align-items: center;
		justify-content: center;
	}

	.toggle span,
	.toggle span::before,
	.toggle span::after {
		display: block;
		width: 1rem;
		height: 1.5px;
		background: var(--ink);
		transition: transform 0.25s ease, opacity 0.25s ease;
	}

	.toggle span::before,
	.toggle span::after {
		content: '';
		position: relative;
	}

	.toggle span::before {
		top: -5px;
	}

	.toggle span::after {
		top: 3.5px;
	}

	.toggle span.open {
		background: transparent;
	}

	.toggle span.open::before {
		transform: translateY(5px) rotate(45deg);
	}

	.toggle span.open::after {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	.drawer {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.5rem var(--gutter) 1.5rem;
		border-top: 1px solid var(--rule);
	}

	.drawer a {
		padding: 0.7rem 0;
		text-decoration: none;
		color: var(--ink-soft);
		font-size: 0.95rem;
	}

	.drawer-cta {
		margin-top: 0.75rem;
		background: var(--terracotta);
		color: #fff !important;
		text-align: center;
		border-radius: 999px;
		font-weight: 600;
		padding: 0.9rem 1rem !important;
	}

	@media (max-width: 860px) {
		.links,
		.cta {
			display: none;
		}
		.toggle {
			display: flex;
		}
	}
</style>
