<script lang="ts">
	import BuildResult from '$lib/components/BuildResult.svelte';
	import FlowQuestion from '$lib/components/FlowQuestion.svelte';
	import RankSelector from '$lib/components/RankSelector.svelte';
	import WeaponTabs from '$lib/components/WeaponTabs.svelte';
	import { resolve } from '$app/paths';
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
			<a href={resolve('/references')} class="refs-link">View all sources →</a>
		</div>
	</div>
</div>

<style>
	.app-header {
		margin-bottom: 24px;
		text-align: center;
	}

	.app-subtitle {
		color: var(--dim);
		font-size: 1rem;
		letter-spacing: 1px;
	}

	.app-lead {
		margin: 18px auto 0;
		max-width: 720px;
		color: color-mix(in srgb, var(--dim) 82%, white 18%);
		font-size: 1.05rem;
		line-height: 1.6;
	}

	.hero-panel,
	.flow-shell {
		border: 1px solid color-mix(in srgb, var(--border) 86%, white 14%);
		border-radius: 16px;
		background: linear-gradient(180deg, rgb(18 20 28 / 0.88), rgb(12 14 20 / 0.94));
		box-shadow:
			0 18px 48px rgb(0 0 0 / 0.28),
			inset 0 1px 0 rgb(255 255 255 / 0.03);
	}

	.hero-panel {
		margin-bottom: 24px;
		padding: 20px;
	}

	.hero-panel-label {
		margin-bottom: 14px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 1.8px;
		text-transform: uppercase;
	}

	.rank-section {
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
	}

	.section-title {
		margin-bottom: 14px;
		border-left: 3px solid var(--gold);
		padding-left: 16px;
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.3rem;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.flow-shell {
		padding: 28px;
	}

	.flow-copy {
		margin: 0 0 24px 0;
		color: color-mix(in srgb, var(--dim) 88%, white 12%);
		font-size: 1rem;
		line-height: 1.55;
	}

	.flow-stack {
		display: flex;
		flex-direction: column;
	}

	.connector {
		margin: 0 auto;
		height: 32px;
		width: 2px;
		background: linear-gradient(to bottom, var(--accent), transparent);
	}

	.page-footer {
		margin-top: 28px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.reset-btn {
		align-self: flex-start;
		border: 1px solid var(--dim);
		border-radius: 6px;
		background: transparent;
		padding: 8px 20px;
		color: var(--dim);
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 1px;
		transition: all 0.2s;
	}

	.reset-btn:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.refs-link {
		display: inline-block;
		margin-top: 10px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--dim);
		text-decoration: none;
		transition: color 0.2s;
	}

	.refs-link:hover {
		color: var(--gold);
	}

	@media (width <= 640px) {
		.hero-panel,
		.flow-shell {
			padding: 20px;
		}

		.app-lead {
			font-size: 0.98rem;
		}

		.flow-copy {
			margin-bottom: 20px;
		}
	}
</style>
