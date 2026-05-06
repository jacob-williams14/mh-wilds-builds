<script lang="ts">
	import BuildResult from '$lib/components/BuildResult.svelte';
	import FlowQuestion from '$lib/components/FlowQuestion.svelte';
	import RankSelector from '$lib/components/RankSelector.svelte';
	import WeaponTabs from '$lib/components/WeaponTabs.svelte';
	import { defaultWeaponKey, weaponData, weaponTabs, type WeaponKey } from '$lib/data';
	import type { RankRange } from '$lib/data/types';

	let currentWeapon = $state<WeaponKey>(defaultWeaponKey);
	let rankRange = $state<RankRange>('hr50');
	let step1Answer = $state<string | null>(null);
	let step2Answer = $state<string | null>(null);

	const currentData = $derived.by(() => weaponData[currentWeapon]);
	const currentFlow = $derived.by(() => currentData.flow[rankRange]);
	const step2Config = $derived.by(() =>
		step1Answer ? (currentFlow.q2[step1Answer] ?? null) : null
	);
	const currentBuild = $derived.by(() =>
		step2Answer ? (currentData.builds[step2Answer] ?? null) : null
	);

	function resetFlow() {
		step1Answer = null;
		step2Answer = null;
	}

	function selectWeapon(weapon: string) {
		currentWeapon = weapon as WeaponKey;
		rankRange = 'hr50';
		resetFlow();
	}

	function selectRank(range: RankRange) {
		rankRange = range;
		resetFlow();
	}

	function answerStep1(value: string) {
		step1Answer = value;
		step2Answer = null;
	}

	function answerStep2(value: string) {
		step2Answer = value;
	}
</script>

<svelte:head>
	<title>MH Wilds — Build Selector</title>
	<meta
		name="description"
		content="A feel-first Monster Hunter Wilds build selector. Choose armor by playstyle; Artian/Gogma weapons noted as best in slot with craftable alternatives."
	/>
</svelte:head>

<div class="app-shell">
	<header class="app-header">
		<h1 class="app-title">MH Wilds Build Selector</h1>
		<div class="app-subtitle">Feel-First — Choose Armor by Playstyle</div>
		<p class="app-lead">
			Choose a weapon, answer two quick questions, and get an endgame build that favors comfort,
			flow, and consistency. Armor is the playstyle decision; weapons are about access —
			Artian/Gogma Artian are best in slot, with non-Artian alternatives listed when you can't craft
			one.
		</p>
	</header>
	<section class="hero-panel">
		<div class="hero-panel-label">Weapon selection</div>
		<WeaponTabs weapons={weaponTabs} activeWeapon={currentWeapon} onSelect={selectWeapon} />
	</section>

	<section class="rank-section">
		<RankSelector selected={rankRange} onSelect={selectRank} />
	</section>

	<section class="flow-shell">
		<div class="section-title">{currentFlow.title}</div>
		<p class="flow-copy">Each path resolves to one build. Switch weapons or reset at any time.</p>

		<div class="flow-stack">
			<FlowQuestion
				stepLabel="Step 1"
				text={currentFlow.q1Text}
				options={currentFlow.q1Options}
				selectedValue={step1Answer}
				active={step1Answer === null}
				completed={step1Answer !== null}
				onAnswer={answerStep1}
			/>

			{#if step2Config}
				<div class="connector"></div>
				<FlowQuestion
					stepLabel="Step 2"
					text={step2Config.text}
					options={step2Config.options}
					selectedValue={step2Answer}
					active={step2Answer === null}
					completed={step2Answer !== null}
					onAnswer={answerStep2}
				/>
			{/if}

			{#if currentBuild}
				<div class="connector"></div>
				<BuildResult
					build={currentBuild}
					artianWeapons={currentData.artianWeapons}
					weapons={currentData.weapons}
					tips={currentData.tips}
					display={currentData.display}
				/>
			{/if}
		</div>
	</section>

	<div class="page-footer">
		<button type="button" class="reset-btn" onclick={resetFlow}>↻ Start Over</button>

		<div class="sources-box">
			<strong>Sources:</strong>
			{currentData.sourcesText}
		</div>
	</div>
</div>
