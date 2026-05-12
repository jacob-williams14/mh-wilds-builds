import { describe, it, expect } from 'vitest';
import { weaponRegistry } from '$lib/data';

const rankRanges = ['hr50', 'hr100'] as const;

describe('flow key contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		for (const rank of rankRanges) {
			const flow = data.flow[rank];

			describe(`${weaponKey} / ${rank}`, () => {
				it('every q1 option value maps to a q2 group', () => {
					for (const option of flow.q1Options) {
						expect(
							Object.keys(flow.q2),
							`q1 value "${option.value}" has no matching q2 group`
						).toContain(option.value);
					}
				});

				it('every q2 option value maps to a build key', () => {
					for (const [groupKey, group] of Object.entries(flow.q2)) {
						for (const option of group.options) {
							expect(
								Object.keys(data.builds),
								`${weaponKey}/${rank} q2["${groupKey}"] option "${option.value}" has no matching build`
							).toContain(option.value);
						}
					}
				});
			});
		}
	}
});
