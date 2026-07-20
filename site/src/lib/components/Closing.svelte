<script lang="ts">
	import { closing, whatsappLink } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="section on-dark closing">
	<div class="shell inner" use:reveal>
		<h2>{closing.heading}</h2>
		<p class="lede">{closing.body}</p>

		<a class="btn btn-on-dark" href={whatsappLink} target="_blank" rel="noopener">
			{closing.cta}
			<span class="arrow" aria-hidden="true">→</span>
		</a>

		<p class="reassurance">{closing.reassurance}</p>
	</div>
</section>

<style>
	.closing {
		border-top: 3px solid var(--terracotta);
	}

	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.9rem, 4.5vw, 3rem);
		max-width: 18ch;
	}

	.lede {
		max-width: 52ch;
	}

	.btn {
		margin-top: 2.25rem;
	}

	.reassurance {
		margin-top: 1.5rem;
		font-size: 0.82rem;
		letter-spacing: 0.04em;
		color: rgba(238, 230, 216, 0.55);
	}
</style>
