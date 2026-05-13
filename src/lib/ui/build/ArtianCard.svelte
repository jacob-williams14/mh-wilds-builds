<script lang="ts">
	import type { ArtianWeapon } from '$lib/domain/types';
	type Props = { weapon: ArtianWeapon };
	let { weapon }: Props = $props();
</script>

<div class="artian-card">
	<div class="artian-header">
		<span class="artian-name">{weapon.name}</span>
		<span class="artian-variant variant-{weapon.variant}">
			{weapon.variant === 'gogma' ? 'Gogma Artian' : 'Artian'}
		</span>
	</div>
	<ul class="artian-steps">
		{#each weapon.steps as step, i (i)}
			<li>{step}</li>
		{/each}
	</ul>
</div>

<style>
	.artian-card {
		border: 1px solid rgb(240 192 64 / 0.25);
		border-radius: 6px;
		background: rgb(240 192 64 / 0.04);
		padding: 12px;
		transition: border-color 0.2s;
	}

	.artian-card:hover {
		border-color: rgb(240 192 64 / 0.4);
	}

	.artian-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 6px;
	}

	.artian-name {
		font-family: 'Chakra Petch', sans-serif;
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--gold);
	}

	.artian-variant {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding: 2px 8px;
		border-radius: 4px;
	}

	.artian-variant.variant-standard {
		background: rgb(240 192 64 / 0.12);
		color: var(--gold);
	}

	.artian-variant.variant-gogma {
		background: rgb(168 85 247 / 0.15);
		color: var(--purple);
	}

	.artian-steps {
		margin: 0;
		padding-left: 16px;
		font-size: 0.82rem;
		color: var(--dim);
		line-height: 1.5;
		list-style: disc;
	}

	.artian-steps li {
		margin-bottom: 2px;
	}
</style>
