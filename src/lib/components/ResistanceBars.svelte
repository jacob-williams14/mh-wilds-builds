<script lang="ts">
	import type { Resistances } from '$lib/data/types';

	type ElementKey = keyof Resistances;

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
	<div class="skills-title">Elemental Resistances</div>
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
