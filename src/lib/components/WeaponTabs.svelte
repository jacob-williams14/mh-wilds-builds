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
