import { describe, it, expect } from 'vitest';
import { weaponRegistry } from '$lib/domain/registry';

const rankRanges = ['hr50', 'hr100'] as const;

// Phase 14: Q1 is a fixed playstyle axis on every weapon and both tiers. This
// is the guard that keeps the three legacy outliers (Bow/IG/LS) from drifting
// back to per-weapon Q1 keys.
const Q1_KEYS = ['damage', 'balanced', 'comfort'] as const;

describe('q1 key contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		for (const rank of rankRanges) {
			it(`${weaponKey} / ${rank}: q1 options are exactly damage/balanced/comfort in order`, () => {
				const values = data.flow[rank].q1Options.map((o) => o.value);
				expect(values).toEqual([...Q1_KEYS]);
			});
		}
	}
});

// Phase 14: a Step 2 with a single answer is not a question. Every branch must
// offer a genuine choice.
describe('q2 branch minimum-options contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		for (const rank of rankRanges) {
			for (const [groupKey, group] of Object.entries(data.flow[rank].q2)) {
				it(`${weaponKey} / ${rank} q2["${groupKey}"] offers at least two options`, () => {
					expect(group.options.length).toBeGreaterThanOrEqual(2);
				});
			}
		}
	}
});

// Phase 14: re-slotting the flow must never strand a build. Every build is
// reachable from some Q2 option or the matchups index — nothing defined but
// invisible.
describe('build reachability contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		const reachable = new Set<string>();
		for (const rank of rankRanges) {
			for (const group of Object.values(data.flow[rank].q2)) {
				for (const option of group.options) reachable.add(option.value);
			}
		}
		for (const matchup of data.matchups ?? []) reachable.add(matchup.buildKey);

		for (const buildKey of Object.keys(data.builds)) {
			it(`${weaponKey}: build "${buildKey}" is reachable from a flow or matchup`, () => {
				expect(reachable, `build "${buildKey}" is defined but unreachable`).toContain(buildKey);
			});
		}
	}
});

// Phase 14: the matchups index must point at real builds.
describe('matchup integrity contract', () => {
	for (const { key: weaponKey, data } of weaponRegistry) {
		for (const matchup of data.matchups ?? []) {
			it(`${weaponKey}: matchup vs "${matchup.monster}" resolves to a build`, () => {
				expect(matchup.monster.length).toBeGreaterThan(0);
				expect(matchup.note.length).toBeGreaterThan(0);
				expect(
					Object.keys(data.builds),
					`matchup buildKey "${matchup.buildKey}" has no matching build`
				).toContain(matchup.buildKey);
			});
		}
	}
});

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
