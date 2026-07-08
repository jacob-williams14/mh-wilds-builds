import { describe, it, expect } from 'vitest';
import { weaponRegistry } from '$lib/domain/registry';

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

// Guards against rank-tier leakage between flows. Invariant across all weapons:
// hr50 flows recommend only un-ranked builds; hr100 flows recommend only `rank: 'hr100'`.
describe('flow rank contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		for (const rank of rankRanges) {
			const flow = data.flow[rank];

			it(`${weaponKey} / ${rank}: every recommended build matches the rank tier`, () => {
				for (const [groupKey, group] of Object.entries(flow.q2)) {
					for (const option of group.options) {
						const build = data.builds[option.value];
						if (!build) continue; // missing builds are the referential test's job
						const where = `${weaponKey}/${rank} q2["${groupKey}"] recommends "${option.value}"`;
						if (rank === 'hr100') {
							expect(
								build.rank,
								`${where} but it is not an hr100 build (rank=${build.rank ?? 'none'})`
							).toBe('hr100');
						} else {
							expect(build.rank, `${where} but it is an hr100-only build`).not.toBe('hr100');
						}
					}
				}
			});
		}
	}
});
