<script lang="ts">
	import { business, nav, whatsappLink } from '$lib/content';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="shell inner">
		<div class="brand">
			<p class="name">{business.name}</p>
			<p class="tagline">{business.tagline}</p>
			<p class="place">{business.baseCity}</p>
		</div>

		<nav aria-label="Footer">
			{#each nav as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<div class="contact">
			<a href={whatsappLink} target="_blank" rel="noopener">
				WhatsApp · {business.whatsappDisplay}
			</a>
			<a href="tel:+{business.whatsapp}">Call {business.whatsappDisplay}</a>
			<a href="mailto:{business.email}">{business.email}</a>
		</div>
	</div>

	<div class="shell base">
		<p>© {year} {business.name}. All rights reserved.</p>
		<p class="disclaimer">
			Client experiences described on this site are personal accounts and are not offered as
			guarantees of any particular outcome.
		</p>
	</div>
</footer>

<style>
	footer {
		background: var(--forest);
		color: rgba(238, 230, 216, 0.7);
		padding-block: clamp(3rem, 6vw, 4.5rem) 2rem;
		font-size: 0.9rem;
	}

	.inner {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 2rem;
		padding-bottom: 2.5rem;
	}

	.name {
		font-family: var(--serif);
		font-size: 1.15rem;
		color: #fff;
	}

	.tagline {
		font-family: var(--serif);
		font-style: italic;
		color: var(--sand);
		margin-top: 0.3rem;
	}

	.place {
		margin-top: 0.75rem;
		font-size: 0.85rem;
		color: rgba(238, 230, 216, 0.5);
	}

	nav,
	.contact {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	a {
		color: rgba(238, 230, 216, 0.7);
		text-decoration: none;
		transition: color 0.2s ease;
		width: fit-content;
	}

	a:hover {
		color: #fff;
	}

	.base {
		border-top: 1px solid rgba(217, 200, 174, 0.16);
		padding-top: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		font-size: 0.78rem;
		color: rgba(238, 230, 216, 0.45);
	}

	.disclaimer {
		max-width: 70ch;
		line-height: 1.6;
	}

	@media (max-width: 760px) {
		.inner {
			grid-template-columns: 1fr;
			gap: 2.25rem;
		}
	}

	/* Clear the fixed WhatsApp bar so it never sits on top of the fine print. */
	@media (max-width: 860px) {
		footer {
			padding-bottom: 6rem;
		}
	}
</style>
