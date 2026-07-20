<script lang="ts">
	/**
	 * The mandala mark.
	 *
	 * The Vastu Purusha Mandala is a square grid. Here the outer square is fixed
	 * and an inner square has been turned within it: the structure never moves,
	 * the energy inside it does. That is the no-demolition promise, drawn.
	 *
	 * The inner square eases a few more degrees on hover, so the mark reads as
	 * something mid-adjustment rather than a static badge.
	 */
	let { size = 22, tone = 'default' }: { size?: number; tone?: 'default' | 'light' } = $props();

	const outer = $derived(tone === 'light' ? 'rgba(217, 200, 174, 0.55)' : 'var(--sage)');
	const inner = $derived(tone === 'light' ? '#D9C8AE' : 'var(--terracotta)');
</script>

<svg
	class="mark"
	viewBox="0 0 64 64"
	width={size}
	height={size}
	role="img"
	aria-label="Koundinya Nemana"
>
	<rect
		x="8"
		y="8"
		width="48"
		height="48"
		rx="7"
		fill="none"
		stroke={outer}
		stroke-width="3.2"
	/>
	<rect
		class="turn"
		x="18.4"
		y="18.4"
		width="27.2"
		height="27.2"
		rx="4"
		fill={inner}
		transform="rotate(24 32 32)"
	/>
</svg>

<style>
	.mark {
		display: block;
		flex: none;
		overflow: visible;
	}

	/* The resting angle is declared here rather than left to the SVG attribute,
	   so that hover animates from 24deg instead of snapping. The attribute stays
	   on the element as a no-CSS fallback. */
	.turn {
		transform-origin: 32px 32px;
		transform: rotate(24deg);
		transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* :global because the hover target is an ancestor outside this component. */
	:global(a:hover) .turn,
	:global(a:focus-visible) .turn {
		transform: rotate(69deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.turn {
			transition: none;
		}
		:global(a:hover) .turn,
		:global(a:focus-visible) .turn {
			transform: rotate(24deg);
		}
	}
</style>
