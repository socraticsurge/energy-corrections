import { site } from '$lib/content';

export const prerender = true;

/** Generated rather than static so the sitemap URL follows the domain. */
export function GET() {
	const body = `# allow crawling everything by default
User-agent: *
Disallow:

Sitemap: ${site.url}/sitemap.xml
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
