import { describe, it, expect } from 'vitest';
import { weaponRegistry } from '$lib/domain/registry';
import { llmsFull, llmsIndex, SITE_URL } from '$lib/domain/llms';

describe('llms-full.txt generation', () => {
	const full = llmsFull();

	it('includes a section for every registered weapon', () => {
		for (const { label } of weaponRegistry) {
			expect(full, `missing weapon section "${label}"`).toContain(`## ${label}`);
		}
	});

	it('includes every build of every weapon by name', () => {
		for (const { key, data } of weaponRegistry) {
			for (const build of Object.values(data.builds)) {
				expect(full, `${key} build "${build.name}" missing`).toContain(`### ${build.name}`);
			}
		}
	});

	it('includes every picker path label', () => {
		for (const { key, data } of weaponRegistry) {
			for (const flow of Object.values(data.flow)) {
				for (const q1 of flow.q1Options) {
					expect(full, `${key} q1 label "${q1.label}" missing`).toContain(q1.label);
				}
			}
		}
	});
});

describe('llms.txt index', () => {
	it('links the full data file and all pages on the live origin', () => {
		const index = llmsIndex();
		for (const path of ['/llms-full.txt', '/', '/build', '/about', '/references']) {
			expect(index).toContain(`${SITE_URL}${path}`);
		}
	});
});
