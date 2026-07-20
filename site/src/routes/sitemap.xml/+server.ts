import { site } from '$lib/content';

export const prerender = true;

/** Single-page site, so the sitemap has exactly one entry. */
export function GET() {
	const lastmod = new Date().toISOString().split('T')[0];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${site.url}/</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
