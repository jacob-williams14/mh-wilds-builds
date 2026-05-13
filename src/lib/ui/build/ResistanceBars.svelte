<script lang="ts">
	import type { Resistances } from '$lib/domain/types';

	type ElementKey = 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';

	type Props = {
		resistances: Resistances;
	};

	type ElementConfig = {
		key: ElementKey;
		label: string;
		color: string;
	};

	let { resistances }: Props = $props();

	const elements: ElementConfig[] = [
		{ key: 'fire', label: 'Fire', color: 'var(--fire)' },
		{ key: 'water', label: 'Water', color: 'var(--water)' },
		{ key: 'thunder', label: 'Thunder', color: 'var(--thunder)' },
		{ key: 'ice', label: 'Ice', color: 'var(--ice)' },
		{ key: 'dragon', label: 'Dragon', color: 'var(--dragon)' }
	];
	const weakElements = $derived(elements.filter((element) => resistances[element.key] < -5));
	const strongElements = $derived(elements.filter((element) => resistances[element.key] > 5));
</script>

<div class="result-section">
	<div class="skills-title">
		Elemental Resistances{#if resistances.unverified}<span class="unverified-note">
				(estimated)</span
			>{/if}
	</div>
	<div class="res-grid">
		{#each elements as element (element.key)}
			{@const value = resistances[element.key]}
			{@const width = Math.min((Math.abs(value) / 20) * 50, 50)}
			<div class="res-item">
				<div class="res-label" style={`color:${element.color}`}>{element.label}</div>
				<div class:pos={value > 0} class:neg={value < 0} class:neu={value === 0} class="res-value">
					{value > 0 ? `+${value}` : value}
				</div>
				<div class="res-bar-track">
					<div class="res-bar-center"></div>
					<div
						class="res-bar-fill"
						style={`${value >= 0 ? 'left:50%;' : 'right:50%;'} width:${width}%; background:${element.color};`}
					></div>
				</div>
			</div>
		{/each}
	</div>
	<div class="res-verdict">
		{#if weakElements.length === 0 && strongElements.length === 0}
			<strong>Verdict:</strong> Fairly neutral resistances.
		{:else}
			{#if weakElements.length > 0}
				<span>
					<strong>Watch out for:</strong>
					{#each weakElements as element, index (element.key)}
						{element.label} ({resistances[element.key]}){index < weakElements.length - 1
							? ', '
							: '.'}
					{/each}
				</span>
			{/if}
			{#if strongElements.length > 0}
				<span class:ml-1={weakElements.length > 0}>
					<strong>Strong against:</strong>
					{#each strongElements as element, index (element.key)}
						{element.label} (+{resistances[element.key]}){index < strongElements.length - 1
							? ', '
							: '.'}
					{/each}
				</span>
			{/if}
		{/if}
	</div>
</div>

<style>
	.res-grid {
		margin-top: 12px;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 10px;
	}

	.res-item {
		border: 1px solid var(--border);
		border-radius: 6px;
		background: rgb(0 0 0 / 0.3);
		padding: 12px;
		text-align: center;
	}

	.res-label {
		margin-bottom: 6px;
		font-size: 0.65rem;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.res-value {
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.4rem;
		font-weight: 700;
	}

	.res-value.pos {
		color: var(--green);
	}

	.res-value.neg {
		color: var(--accent2);
	}

	.res-value.neu {
		color: var(--dim);
	}

	.res-bar-track {
		position: relative;
		margin-top: 8px;
		height: 4px;
		border-radius: 2px;
		background: rgb(255 255 255 / 0.08);
	}

	.res-bar-center {
		position: absolute;
		left: 50%;
		top: -1px;
		height: 6px;
		width: 1px;
		background: rgb(255 255 255 / 0.2);
	}

	.res-bar-fill {
		position: absolute;
		top: 0;
		height: 100%;
		border-radius: 2px;
		opacity: 0.7;
	}

	.res-verdict {
		margin-top: 16px;
		border-radius: 6px;
		background: rgb(0 0 0 / 0.2);
		padding: 12px 16px;
		color: var(--dim);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.res-verdict strong {
		color: var(--text);
	}

	.unverified-note {
		margin-left: 6px;
		color: var(--dim);
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 0.5px;
		text-transform: none;
	}

	@media (width <= 640px) {
		.res-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
