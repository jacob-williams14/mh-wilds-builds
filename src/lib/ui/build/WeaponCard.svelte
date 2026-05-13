<script lang="ts">
	import type { WeaponDisplay, WeaponOption } from '$lib/domain/types';
	type Props = { weapon: WeaponOption; layout: WeaponDisplay['weaponLayout'] };
	let { weapon, layout }: Props = $props();
</script>

<div class="weapon-card">
	{#if weapon.element}
		<div class={`weapon-element ${weapon.cls ?? ''}`.trim()}>{weapon.element}</div>
	{/if}
	<div class="weapon-name">{weapon.name}</div>
	<div class={layout === 'chip' ? 'weapon-stat' : 'weapon-detail'}>
		{weapon.info}
	</div>
</div>

<style>
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
</style>
