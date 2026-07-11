import { llmsFull } from '$lib/domain/llms';

export const prerender = true;

export function GET() {
	return new Response(llmsFull(), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
