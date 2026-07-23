import { SITE_URL } from '$lib/domain/llms';

export const prerender = true;

const PAGES = ['/', '/build', '/about', '/references', '/llms.txt', '/llms-full.txt'];

export function GET() {
	const urls = PAGES.map((path) => `\t<url><loc>${SITE_URL}${path}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
