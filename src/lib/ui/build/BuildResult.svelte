<script lang="ts">
	import type {
		ArtianWeapon,
		Build,
		WeaponDisplay,
		WeaponOption,
		WeaponTip
	} from '$lib/domain/types';
	import ResistanceBars from './ResistanceBars.svelte';
	import SkillTags from '$lib/ui/shared/SkillTags.svelte';
	import ArmorGrid from './ArmorGrid.svelte';
	import ArtianCard from './ArtianCard.svelte';
	import WeaponCard from './WeaponCard.svelte';

	type Props = {
		build: Build;
		artianWeapons: ArtianWeapon[];
		weapons: WeaponOption[];
		tips?: WeaponTip[];
		display: WeaponDisplay;
	};

	let { build, artianWeapons, weapons, tips, display }: Props = $props();

	const damageSkills = $derived(
		build.skills.filter((skill) => skill.type === 'dmg').map((skill) => skill.name)
	);
	const comfortSkills = $derived(
		build.skills.filter((skill) => skill.type === 'comfort').map((skill) => skill.name)
	);
	const tierLabel = $derived.by(() => {
		switch (build.tier) {
			case 'meta':
				return 'TU4 Meta';
			case 'mixed':
				return 'Mixed Gogma';
			default:
				return null;
		}
	});
</script>

<section class="result-card">
	<div class="result-header">
		<div class="result-name">{build.name}</div>
	</div>

	<div class="source-chip-row">
		<span class="skill-tag ss source-chip">Source: {build.source}</span>
		{#if tierLabel}
			<span class="skill-tag tier-chip tier-{build.tier}">{tierLabel}</span>
		{/if}
	</div>

	<div class="result-desc">{build.desc}</div>

	<ArmorGrid armor={build.armor} />

	<ResistanceBars resistances={build.res} />

	<SkillTags title="Offensive Skills" items={damageSkills} variant="damage" />
	<SkillTags title={display.comfortTitle} items={comfortSkills} variant="comfort" />
	<SkillTags title="Set / Group Skills" items={build.setSkills} variant="set" />

	<div class="note-box">
		<strong>Meal Setup:</strong>
		{build.meal}
	</div>

	<div class="result-section">
		<div class="skills-title">Best-in-Slot Weapons</div>
		<div class="artian-grid">
			{#each artianWeapons as aw (aw.name)}
				<ArtianCard weapon={aw} />
			{/each}
		</div>
	</div>

	{#if tips?.length}
		{#each tips as tip (tip.title)}
			<div class="result-section">
				<div class="skills-title">{tip.title}</div>
				<ul class="tip-lines">
					{#each tip.lines as line, i (i)}
						<li>{line}</li>
					{/each}
				</ul>
			</div>
		{/each}
	{/if}

	<div class="result-section">
		<div class="skills-title">{display.weaponListTitle}</div>
		<div class="weapon-grid">
			{#each weapons as weapon (weapon.name)}
				<WeaponCard {weapon} layout={display.weaponLayout} />
			{/each}
		</div>
	</div>
</section>

<style>
	.result-card {
		border: 1px solid var(--gold);
		border-radius: 14px;
		background: linear-gradient(135deg, rgb(20 23 34 / 0.5), rgb(26 29 42 / 0.5));
		padding: 32px;
		box-shadow: 0 18px 40px rgb(0 0 0 / 0.22);
	}

	.result-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		margin-bottom: 20px;
	}

	.result-name {
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.result-desc {
		margin-bottom: 24px;
		color: var(--dim);
		font-size: 1rem;
		line-height: 1.6;
	}

	.source-chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 8px;
	}

	.source-chip {
		font-size: 0.75rem;
	}

	.tier-chip {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	.tier-chip.tier-meta {
		color: var(--gold);
		background: rgb(240 192 64 / 0.12);
		border: 1px solid var(--gold);
	}

	.tier-chip.tier-mixed {
		color: var(--raw);
		background: rgb(201 168 122 / 0.1);
		border: 1px solid var(--raw);
	}

	.artian-grid {
		margin-top: 12px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 8px;
	}

	.tip-lines {
		margin: 8px 0 0;
		padding-left: 18px;
		font-size: 0.85rem;
		color: var(--dim);
		line-height: 1.5;
		list-style: disc;
	}

	.tip-lines li {
		margin-bottom: 3px;
	}

	.weapon-grid {
		margin-top: 12px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 8px;
	}

	@media (width <= 640px) {
		.result-card {
			padding: 24px 20px;
		}
	}
</style>
