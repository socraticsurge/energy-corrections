<script lang="ts">
	import { business, whatsappLink } from '$lib/content';

	// Held back until the hero's own button has scrolled away, so the first
	// impression stays uncluttered and the bar never competes with it.
	let show = $state(false);

	function onScroll() {
		show = window.scrollY > window.innerHeight * 0.9;
	}
</script>

<svelte:window on:scroll={onScroll} />

<div class="bar" class:show aria-hidden={!show}>
	<div class="text">
		<strong>Book an assessment</strong>
		<span>No demolition. Cost upfront.</span>
	</div>
	<a
		class="go"
		href={whatsappLink}
		target="_blank"
		rel="noopener"
		tabindex={show ? 0 : -1}
		aria-label="Book an assessment on WhatsApp at {business.whatsappDisplay}"
	>
		<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
			<path
				d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z"
			/>
			<path
				d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"
			/>
		</svg>
		WhatsApp
	</a>
</div>

<style>
	.bar {
		position: fixed;
		left: 0.75rem;
		right: 0.75rem;
		bottom: 0.75rem;
		z-index: 60;
		display: none;
		align-items: center;
		gap: 1rem;
		padding: 0.7rem 0.7rem 0.7rem 1.1rem;
		background: var(--forest);
		border-radius: 14px;
		box-shadow: 0 8px 30px rgba(44, 58, 46, 0.28);
		transform: translateY(140%);
		opacity: 0;
		transition:
			transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.25s ease;
	}

	.bar.show {
		transform: none;
		opacity: 1;
	}

	.text {
		display: flex;
		flex-direction: column;
		min-width: 0;
		line-height: 1.3;
	}

	strong {
		font-size: 0.92rem;
		color: #fff;
		font-weight: 600;
	}

	span {
		font-size: 0.72rem;
		color: rgba(238, 230, 216, 0.62);
	}

	.go {
		margin-left: auto;
		flex: none;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		background: var(--terracotta);
		color: #fff;
		text-decoration: none;
		font-size: 0.88rem;
		font-weight: 600;
		padding: 0.7rem 1.1rem;
		border-radius: 999px;
	}

	/* Phones only. On desktop the header CTA is always in view already. */
	@media (max-width: 860px) {
		.bar {
			display: flex;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bar {
			transition: opacity 0.2s ease;
			transform: none;
		}
	}
</style>
