import { llmsIndex } from '$lib/domain/llms';

export const prerender = true;

export function GET() {
	return new Response(llmsIndex(), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
