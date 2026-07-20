/**
 * Fades an element in the first time it scrolls into view.
 * Degrades gracefully: if IntersectionObserver is unavailable the element is
 * shown immediately rather than being left invisible.
 */
export function reveal(node: HTMLElement, delay = 0) {
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	node.classList.add('reveal');
	node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
