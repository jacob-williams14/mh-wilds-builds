<script lang="ts">
	import type { Build, WeaponDisplay, WeaponOption } from '$lib/data/types';
	import ResistanceBars from './ResistanceBars.svelte';
	import SkillTags from './SkillTags.svelte';

	type Props = {
		build: Build;
		weapons: WeaponOption[];
		display: WeaponDisplay;
	};

	let { build, weapons, display }: Props = $props();

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
		<div class="result-stars">{build.stars}</div>
	</div>

	<div class="source-chip-row">
		<span class="skill-tag ss source-chip">Source: {build.source}</span>
		{#if tierLabel}
			<span class="skill-tag tier-chip tier-{build.tier}">{tierLabel}</span>
		{/if}
	</div>

	<div class="result-desc">{build.desc}</div>

	<div class="result-section">
		<div class="skills-title">Armor Pieces</div>
		<div class="gear-grid">
			{#each Object.entries(build.armor) as [slot, piece] (slot)}
				<div class="gear-slot">
					<div class="gear-slot-label">{slot}</div>
					<div class="gear-slot-value">{piece}</div>
				</div>
			{/each}
		</div>
	</div>

	<ResistanceBars resistances={build.res} />

	<SkillTags title="Offensive Skills" items={damageSkills} variant="damage" />
	<SkillTags title={display.comfortTitle} items={comfortSkills} variant="comfort" />
	<SkillTags title="Set / Group Skills" items={build.setSkills} variant="set" />

	<div class="note-box">
		<strong>Meal Setup:</strong>
		{build.meal}
	</div>

	<div class="result-section">
		<div class="skills-title">{display.weaponListTitle}</div>
		<div class="weapon-grid">
			{#each weapons as weapon (weapon.name)}
				<div class="weapon-card">
					{#if weapon.element}
						<div class={`weapon-element ${weapon.cls ?? ''}`.trim()}>{weapon.element}</div>
					{/if}
					<div class="weapon-name">{weapon.name}</div>
					<div class={display.weaponLayout === 'chip' ? 'weapon-stat' : 'weapon-detail'}>
						{weapon.info}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
