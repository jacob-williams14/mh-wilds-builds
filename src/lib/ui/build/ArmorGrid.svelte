<script lang="ts">
	import type { Build } from '$lib/domain/types';
	type Props = { armor: Build['armor'] };
	let { armor }: Props = $props();
</script>

<div class="result-section">
	<div class="skills-title">Armor Pieces</div>
	<div class="gear-grid">
		{#each Object.entries(armor) as [slot, piece] (slot)}
			<div class="gear-slot">
				<div class="gear-slot-label">{slot}</div>
				<div class="gear-slot-value">{piece}</div>
			</div>
		{/each}
	</div>
</div>

<style>
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

	@media (width <= 640px) {
		.gear-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
