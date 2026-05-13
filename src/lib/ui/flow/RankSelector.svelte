<script lang="ts">
	import type { RankRange } from '$lib/domain/types';

	type Props = {
		selected: RankRange;
		onSelect: (range: RankRange) => void;
	};

	let { selected, onSelect }: Props = $props();

	const RANKS: { key: RankRange; label: string }[] = [
		{ key: 'hr50', label: 'HR 50–100' },
		{ key: 'hr100', label: 'HR 100+' }
	];
</script>

<div class="rank-selector">
	{#each RANKS as rank (rank.key)}
		<button
			type="button"
			class:active={selected === rank.key}
			class="rank-btn"
			onclick={() => onSelect(rank.key)}
		>
			{rank.label}
		</button>
	{/each}
</div>

<style>
	.rank-selector {
		display: inline-flex;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--card);
		overflow: hidden;
	}

	.rank-btn {
		padding: 10px 24px;
		border: none;
		background: transparent;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.rank-btn:hover {
		color: var(--text);
		background: rgb(255 255 255 / 0.04);
	}

	.rank-btn.active {
		background: linear-gradient(135deg, rgb(232 69 69 / 0.18), rgb(240 192 64 / 0.12));
		color: var(--gold);
		box-shadow: inset 0 0 16px rgb(240 192 64 / 0.06);
	}

	.rank-btn + .rank-btn {
		border-left: 1px solid var(--border);
	}
</style>
