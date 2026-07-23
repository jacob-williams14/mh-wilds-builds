import { weaponRegistry } from './registry';
import type { Build, FlowConfig, RankRange, WeaponData } from './types';

export const SITE_URL = 'https://mh-wilds-builds.pages.dev';

const RANK_LABELS: Record<RankRange, string> = { hr50: 'HR 50–100', hr100: 'HR 100+' };

function buildToMd(build: Build): string {
	const rank = RANK_LABELS[build.rank ?? 'hr50'];
	const armor = (Object.entries(build.armor) as [string, string][])
		.map(([slot, piece]) => `${slot}: ${piece}`)
		.join(' · ');
	const skills = build.skills.map((s) => `${s.name} (${s.type})`).join(', ');
	const res = `Fire ${build.res.fire}, Water ${build.res.water}, Thunder ${build.res.thunder}, Ice ${build.res.ice}, Dragon ${build.res.dragon}${build.res.unverified ? ' (unverified)' : ''}`;
	const lines = [
		`### ${build.name} — ${rank}, ${build.tier}`,
		'',
		`${build.desc} (Source: ${build.source})`,
		'',
		`- Armor: ${armor}`,
		`- Skills: ${skills}`
	];
	if (build.setSkills.length > 0) lines.push(`- Set skills: ${build.setSkills.join(', ')}`);
	lines.push(`- Meal: ${build.meal}`, `- Resistances: ${res}`);
	return lines.join('\n');
}

function flowToMd(flow: FlowConfig, rank: RankRange, builds: WeaponData['builds']): string {
	const paths: string[] = [];
	for (const q1 of flow.q1Options) {
		const step2 = flow.q2[q1.value];
		if (!step2) continue;
		for (const q2 of step2.options) {
			const build = builds[q2.value];
			if (build) paths.push(`- ${q1.label} → ${q2.label} → **${build.name}**`);
		}
	}
	return [`**Picker paths (${RANK_LABELS[rank]}):**`, ...paths].join('\n');
}

function weaponToMd(label: string, data: WeaponData): string {
	const sections = [`## ${label}`, '', data.sourcesText, ''];

	for (const build of Object.values(data.builds)) {
		sections.push(buildToMd(build), '');
	}

	for (const rank of ['hr50', 'hr100'] as const) {
		if (data.flow[rank]) sections.push(flowToMd(data.flow[rank], rank, data.builds), '');
	}

	if (data.artianWeapons.length > 0) {
		sections.push(
			'**Artian weapons (best in slot):**',
			...data.artianWeapons.map((w) => `- ${w.name} (${w.variant}): ${w.steps.join('; ')}`),
			''
		);
	}

	if (data.weapons.length > 0) {
		sections.push(
			`**${data.display.weaponListTitle}:**`,
			...data.weapons.map((w) => `- ${w.name} ${w.info}`),
			''
		);
	}

	for (const tip of data.tips ?? []) {
		sections.push(`**${tip.title}:**`, ...tip.lines.map((l) => `- ${l}`), '');
	}

	return sections.join('\n');
}

/** Full dataset as markdown — served at /llms-full.txt for LLM/AI-search consumption. */
export function llmsFull(): string {
	const header = [
		'# MH Wilds Build Selector — full build data',
		'',
		'> Feel-first endgame armor builds for every Monster Hunter Wilds weapon, in two rank',
		`> tiers (HR 50–100 and HR 100+). Interactive picker at ${SITE_URL}/build — choose a weapon,`,
		'> answer two playstyle questions, get a build. Data is transcribed from Game8 build',
		'> guides and community spreadsheets; per-weapon source notes below, full source list',
		`> at ${SITE_URL}/references.`,
		'',
		'Tiers: craftable = farmable pieces only · mixed = some grind · meta = endgame grind.',
		''
	];
	const body = weaponRegistry.map(({ label, data }) => weaponToMd(label, data));
	return [...header, ...body].join('\n');
}

/** llms.txt index — a short, linked overview per the llmstxt.org convention. */
export function llmsIndex(): string {
	return [
		'# MH Wilds Build Selector',
		'',
		'> A feel-first Monster Hunter Wilds endgame build selector: pick a weapon, answer two',
		'> playstyle questions, get an armor build that favors comfort, flow, and consistency',
		'> over squeezing the meta. 14 weapons, two rank tiers (HR 50–100 and HR 100+).',
		'',
		'No ads, no accounts, no cookies. Built and maintained by one hunter-dev (jWill).',
		'',
		'## Data',
		'',
		`- [Full build data](${SITE_URL}/llms-full.txt): every build for all 14 weapons —`,
		'  armor pieces, skills, set skills, meals, resistances, picker paths, Artian weapon',
		'  crafting steps, and weapon alternatives, in plain markdown.',
		'',
		'## Pages',
		'',
		`- [Home](${SITE_URL}/): what the site is and the feel-first pitch`,
		`- [Build selector](${SITE_URL}/build): the interactive two-question picker`,
		`- [About](${SITE_URL}/about): what the site is and who makes it`,
		`- [Sources](${SITE_URL}/references): every source used, per weapon`,
		''
	].join('\n');
}
