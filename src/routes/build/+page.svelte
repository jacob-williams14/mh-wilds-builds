<script lang="ts">
	import BuildResult from '$lib/ui/build/BuildResult.svelte';
	import FlowQuestion from '$lib/ui/flow/FlowQuestion.svelte';
	import RankSelector from '$lib/ui/flow/RankSelector.svelte';
	import WeaponTabs from '$lib/ui/flow/WeaponTabs.svelte';
	import { resolve } from '$app/paths';
	import { weaponData, weaponTabs, type WeaponKey } from '$lib/domain/registry';
	import type { RankRange } from '$lib/domain/types';

	// The Buy Me a Coffee link also lives on the /about page ("Who made this").
	const FEEDBACK_URL = 'https://forms.gle/jYsQsnsvY5fQXexz7';
	const COFFEE_URL = 'https://buymeacoffee.com/jwill';
	const feedbackReady = !FEEDBACK_URL.includes('YOUR_');

	// No weapon is preselected — choosing one is the explicit first step.
	let currentWeapon = $state<WeaponKey | null>(null);
	let rankRange = $state<RankRange>('hr50');
	let step1Answer = $state<string | null>(null);
	let step2Answer = $state<string | null>(null);

	const currentData = $derived.by(() => (currentWeapon ? weaponData[currentWeapon] : null));
	const currentFlow = $derived.by(() => currentData?.flow[rankRange] ?? null);
	const step2Config = $derived.by(() =>
		step1Answer && currentFlow ? (currentFlow.q2[step1Answer] ?? null) : null
	);
	const currentBuild = $derived.by(() =>
		step2Answer && currentData ? (currentData.builds[step2Answer] ?? null) : null
	);

	// Matchup builds for this weapon that belong to the selected rank tier — never
	// surface an HR100 build on the HR50 flow (undertiered armor is unsafe advice).
	const matchupsForRank = $derived.by(() => {
		if (!currentData?.matchups) return [];
		return currentData.matchups.filter((m) => {
			const build = currentData.builds[m.buildKey];
			if (!build) return false;
			return rankRange === 'hr100' ? build.rank === 'hr100' : build.rank !== 'hr100';
		});
	});

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

	// Jump the flow straight to a matchup build, wherever it lives in Q2, so the
	// questionnaire stays consistent with the result shown.
	function selectMatchup(buildKey: string) {
		if (!currentFlow) return;
		for (const [q1Value, step] of Object.entries(currentFlow.q2)) {
			if (step.options.some((o) => o.value === buildKey)) {
				step1Answer = q1Value;
				step2Answer = buildKey;
				return;
			}
		}
	}
</script>

<svelte:head>
	<title>Build Selector — MH Wilds</title>
	<meta
		name="description"
		content="Pick a weapon, answer two playstyle questions, and get an endgame Monster Hunter Wilds armor build tuned for feel over raw optimization."
	/>
</svelte:head>

<div class="app-shell">
	<header class="build-header">
		<h1 class="app-title">Build Selector</h1>
		<p class="build-lead">
			Pick a weapon, answer two quick questions, and get an endgame build that favors comfort, flow,
			and consistency.
		</p>
	</header>

	<section class="hero-panel">
		<div class="hero-panel-label">Step 1 — Choose your weapon</div>
		<WeaponTabs weapons={weaponTabs} activeWeapon={currentWeapon ?? ''} onSelect={selectWeapon} />
	</section>

	{#if currentData && currentFlow}
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

			{#if matchupsForRank.length > 0}
				<div class="matchup-lane">
					<div class="matchup-title">Hunting something specific?</div>
					<p class="matchup-copy">
						These builds are tuned for a particular monster — pick one to jump straight to it.
					</p>
					<div class="matchup-grid">
						{#each matchupsForRank as matchup (matchup.buildKey)}
							<button
								type="button"
								class="matchup-card"
								class:selected={step2Answer === matchup.buildKey}
								onclick={() => selectMatchup(matchup.buildKey)}
							>
								<span class="matchup-monster">vs {matchup.monster}</span>
								<span class="matchup-note">{matchup.note}</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</section>

		{#if currentBuild}
			<section class="cta-panel">
				<div class="cta-heading">Got what you needed?</div>
				<p class="cta-copy">
					This is a no-ads solo side project. Feedback shapes what gets built next, and a coffee
					keeps the late-night data transcription going.
				</p>
				<div class="cta-actions">
					{#if feedbackReady}
						<a
							href={FEEDBACK_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="cta-btn primary"
						>
							💬 Leave Feedback
						</a>
					{/if}
					<a href={COFFEE_URL} target="_blank" rel="external noopener noreferrer" class="cta-btn">
						☕ Buy me a coffee
					</a>
					<a href={resolve('/about')} class="cta-btn">More about this project →</a>
				</div>
			</section>
		{/if}

		<div class="page-footer">
			<div class="footer-actions">
				<button type="button" class="reset-btn" onclick={resetFlow}>↻ Start Over</button>
			</div>

			<div class="sources-box">
				<strong>Sources:</strong>
				{currentData.sourcesText}
				<a href={resolve('/references')} class="refs-link">View all sources →</a>
			</div>
		</div>
	{:else}
		<p class="empty-hint">Choose a weapon above to start the two-question flow.</p>
	{/if}
</div>

<style>
	.build-header {
		margin-bottom: 24px;
		text-align: center;
	}

	.build-lead {
		margin: 12px auto 0;
		max-width: 640px;
		color: color-mix(in srgb, var(--dim) 82%, white 18%);
		font-size: 1.02rem;
		line-height: 1.55;
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

	.matchup-lane {
		margin-top: 28px;
		border-top: 1px solid var(--border);
		padding-top: 24px;
	}

	.matchup-title {
		color: var(--blue);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.matchup-copy {
		margin: 8px 0 16px;
		color: var(--dim);
		font-size: 0.92rem;
		line-height: 1.5;
	}

	.matchup-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 10px;
	}

	.matchup-card {
		display: flex;
		flex-direction: column;
		gap: 6px;
		border: 1px solid color-mix(in srgb, var(--blue) 35%, var(--border));
		border-radius: 10px;
		background: color-mix(in srgb, var(--blue) 6%, transparent);
		padding: 14px 16px;
		text-align: left;
		transition: all 0.2s;
	}

	.matchup-card:hover {
		border-color: var(--blue);
		background: color-mix(in srgb, var(--blue) 12%, transparent);
	}

	.matchup-card.selected {
		border-color: var(--gold);
		background: color-mix(in srgb, var(--gold) 10%, transparent);
	}

	.matchup-monster {
		color: var(--blue);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		letter-spacing: 0.5px;
	}

	.matchup-card.selected .matchup-monster {
		color: var(--gold);
	}

	.matchup-note {
		color: var(--dim);
		font-size: 0.85rem;
		line-height: 1.45;
	}

	.cta-panel {
		margin-top: 24px;
		border: 1px solid color-mix(in srgb, var(--gold) 30%, var(--border));
		border-radius: 14px;
		background: linear-gradient(135deg, rgb(240 192 64 / 0.06), rgb(232 69 69 / 0.04));
		padding: 24px 28px;
		text-align: center;
	}

	.cta-heading {
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.cta-copy {
		margin: 10px auto 18px;
		max-width: 520px;
		color: color-mix(in srgb, var(--dim) 85%, white 15%);
		font-size: 0.95rem;
		line-height: 1.55;
	}

	.cta-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
	}

	.cta-btn {
		border: 1px solid var(--dim);
		border-radius: 6px;
		background: transparent;
		padding: 9px 18px;
		color: var(--text);
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.cta-btn:hover {
		border-color: var(--gold);
		color: var(--gold);
	}

	.cta-btn.primary {
		border-color: var(--accent);
		background: rgb(232 69 69 / 0.12);
		color: var(--accent2);
	}

	.cta-btn.primary:hover {
		border-color: var(--accent2);
		background: rgb(232 69 69 / 0.2);
		color: var(--text);
	}

	.page-footer {
		margin-top: 28px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.footer-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
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
		text-decoration: none;
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

	.empty-hint {
		margin: 8px 0 0;
		color: var(--dim);
		font-size: 0.98rem;
		text-align: center;
	}

	@media (width <= 640px) {
		.hero-panel,
		.flow-shell {
			padding: 20px;
		}

		.build-lead {
			font-size: 0.98rem;
		}

		.flow-copy {
			margin-bottom: 20px;
		}

		.cta-panel {
			padding: 20px;
		}
	}
</style>
