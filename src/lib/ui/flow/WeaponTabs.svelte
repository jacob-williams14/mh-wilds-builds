<script lang="ts">
	type WeaponTab = {
		key: string;
		label: string;
	};

	type Props = {
		weapons: readonly WeaponTab[];
		activeWeapon: string;
		onSelect: (weapon: string) => void;
	};

	let { weapons, activeWeapon, onSelect }: Props = $props();
</script>

<div class="weapon-tabs">
	{#each weapons as weapon (weapon.key)}
		<button
			type="button"
			class:active={weapon.key === activeWeapon}
			class="weapon-tab"
			onclick={() => onSelect(weapon.key)}
		>
			{weapon.label}
		</button>
	{/each}
</div>

<style>
	.weapon-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.weapon-tab {
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 14px 22px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.weapon-tab:hover {
		background: #1a1d2a;
		color: var(--text);
	}

	.weapon-tab.active {
		background: linear-gradient(135deg, rgb(232 69 69 / 0.15), rgb(240 192 64 / 0.1));
		border-color: var(--gold);
		color: var(--gold);
	}

	@media (width <= 640px) {
		.weapon-tab {
			width: 100%;
			padding-inline: 18px;
			font-size: 0.95rem;
			text-align: center;
		}
	}
</style>
