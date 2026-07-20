import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// When deploying to a GitHub Pages *project* site the app is served from
// https://<user>.github.io/<repo>/, so every asset needs that prefix.
// The deploy workflow sets BASE_PATH; local dev and custom domains leave it empty.
const base = (process.env.BASE_PATH ?? '') as '' | `/${string}`;

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Fully prerendered static output — no server, which is all GitHub Pages can host.
			adapter: adapter({ fallback: '404.html' }),
			paths: { base },
			prerender: { entries: ['*'] }
		})
	]
});
