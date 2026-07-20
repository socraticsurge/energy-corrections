import { existsSync, readFileSync } from 'node:fs';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/**
 * Everything about where the site lives is derived from one file: static/CNAME.
 *
 * No CNAME  -> GitHub Pages project site, served from /<repo>/, so assets need
 *              that prefix and the canonical URL points at github.io.
 * CNAME     -> custom domain, served from the root, so the prefix must be empty
 *              and the canonical URL points at the domain.
 *
 * Getting this wrong is the classic GitHub Pages failure: a custom domain with
 * a leftover /<repo>/ prefix serves a page with every stylesheet 404ing.
 */
const CNAME_PATH = 'static/CNAME';
const domain = existsSync(CNAME_PATH) ? readFileSync(CNAME_PATH, 'utf8').trim() : '';

const base = domain ? '' : ((process.env.BASE_PATH ?? '') as '' | `/${string}`);

const siteUrl = domain
	? `https://${domain}`
	: `https://socraticsurge.github.io${base}`;

export default defineConfig({
	define: {
		// Consumed by src/lib/content.ts for canonical, Open Graph and sitemap.
		__SITE_URL__: JSON.stringify(siteUrl)
	},
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Fully prerendered static output. No server, which is all GitHub Pages can host.
			adapter: adapter({ fallback: '404.html' }),
			paths: { base },
			prerender: { entries: ['*'] }
		})
	]
});
