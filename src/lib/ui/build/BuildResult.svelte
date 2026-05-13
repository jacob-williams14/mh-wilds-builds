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
		<div class="skills-title">Best-in-Slot Weapons</div>
		<div class="artian-grid">
			{#each artianWeapons as aw (aw.name)}
				<div class="artian-card">
					<div class="artian-header">
						<span class="artian-name">{aw.name}</span>
						<span class="artian-variant variant-{aw.variant}">
							{aw.variant === 'gogma' ? 'Gogma Artian' : 'Artian'}
						</span>
					</div>
					<ul class="artian-steps">
						{#each aw.steps as step, i (i)}
							<li>{step}</li>
						{/each}
					</ul>
				</div>
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

	.gear-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
	}

	.gear-slot {
		border: 1px solid var(--border);
		border-radius: 6px;
		background: rgb(0 0 0 / 0.3);
		padding: 14px 18px;
	}

	.gear-slot-label {
		margin-bottom: 4px;
		color: var(--dim);
		font-size: 0.7rem;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.gear-slot-value {
		color: var(--text);
		font-size: 1.05rem;
		font-weight: 600;
	}

	.artian-grid {
		margin-top: 12px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 8px;
	}

	.artian-card {
		border: 1px solid rgb(240 192 64 / 0.25);
		border-radius: 6px;
		background: rgb(240 192 64 / 0.04);
		padding: 12px;
		transition: border-color 0.2s;
	}

	.artian-card:hover {
		border-color: rgb(240 192 64 / 0.4);
	}

	.artian-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 6px;
	}

	.artian-name {
		font-family: 'Chakra Petch', sans-serif;
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--gold);
	}

	.artian-variant {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding: 2px 8px;
		border-radius: 4px;
	}

	.artian-variant.variant-standard {
		background: rgb(240 192 64 / 0.12);
		color: var(--gold);
	}

	.artian-variant.variant-gogma {
		background: rgb(168 85 247 / 0.15);
		color: var(--purple);
	}

	.artian-steps {
		margin: 0;
		padding-left: 16px;
		font-size: 0.82rem;
		color: var(--dim);
		line-height: 1.5;
		list-style: disc;
	}

	.artian-steps li {
		margin-bottom: 2px;
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

	.weapon-card {
		border: 1px solid var(--border);
		border-radius: 6px;
		background: rgb(0 0 0 / 0.25);
		padding: 12px;
		transition: border-color 0.2s;
	}

	.weapon-card:hover {
		border-color: var(--gold);
	}

	.weapon-element {
		margin-bottom: 4px;
		font-size: 0.65rem;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.weapon-element.fire {
		color: var(--fire);
	}

	.weapon-element.water {
		color: var(--water);
	}

	.weapon-element.thunder {
		color: var(--thunder);
	}

	.weapon-element.ice {
		color: var(--ice);
	}

	.weapon-element.dragon {
		color: var(--dragon);
	}

	.weapon-element.raw {
		color: var(--raw);
	}

	.weapon-name {
		color: var(--text);
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.weapon-stat,
	.weapon-detail {
		margin-top: 4px;
		color: var(--dim);
		font-size: 0.78rem;
		line-height: 1.4;
	}

	@media (width <= 640px) {
		.result-card {
			padding: 24px 20px;
		}

		.gear-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
