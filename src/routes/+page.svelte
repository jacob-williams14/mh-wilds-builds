<script lang="ts">
	import { resolve } from '$app/paths';
	import { weaponRegistry } from '$lib/domain/registry';

	const weaponCount = weaponRegistry.length;

	const steps = [
		{
			n: '1',
			title: 'Pick a weapon',
			body: 'Choose your weapon and Hunter Rank tier — HR 50–100 or HR 100+.'
		},
		{
			n: '2',
			title: 'Answer two questions',
			body: 'The first about what you want from the build, the second about how you like to play it.'
		},
		{
			n: '3',
			title: 'Get one build',
			body: 'A single loadout with skills, decorations, a recommended meal, and the weapon to aim for.'
		}
	];
</script>

<svelte:head>
	<title>MH Wilds Build Selector — Choose Armor by Playstyle</title>
	<meta
		name="description"
		content="A feel-first Monster Hunter Wilds build selector. Pick a weapon, answer two playstyle questions, and get an endgame armor build tuned for comfort, flow, and consistency."
	/>
</svelte:head>

<div class="app-shell">
	<section class="hero">
		<div class="hero-eyebrow">Feel-first · No ads · No accounts</div>
		<h1 class="app-title hero-title">MH Wilds Build Selector</h1>
		<p class="hero-tagline">Choose armor by how you like to play — not by chasing the meta.</p>
		<p class="hero-sub">
			Endgame builds for all {weaponCount} weapons across two rank tiers, favoring comfort, flow, and
			consistency over squeezing every last damage number.
		</p>
		<div class="hero-actions">
			<a href={resolve('/build')} class="cta-primary">Get Started →</a>
		</div>
	</section>

	<section class="how">
		<div class="how-label">How it works</div>
		<div class="how-grid">
			{#each steps as step (step.n)}
				<div class="how-card">
					<div class="how-num">{step.n}</div>
					<div class="how-card-title">{step.title}</div>
					<p class="how-card-body">{step.body}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="why">
		<h2 class="why-heading">Why feel-first?</h2>
		<p class="why-body">
			Most guides optimize for the highest possible damage number. This one optimizes for how a
			build <em>feels</em> to play. Armor is the playstyle decision — whether you trade blows, dodge everything,
			or sharpen and mount without breaking flow. Weapons are about access: Artian and Gogma Artian are
			best in slot, with craftable alternatives listed for when you can't craft one yet.
		</p>
		<div class="why-links">
			<a href={resolve('/references')} class="why-link">Where builds come from →</a>
			<a href={resolve('/about')} class="why-link">About the project & the dev →</a>
		</div>
	</section>
</div>

<style>
	.hero {
		margin: 24px 0 40px;
		text-align: center;
	}

	.hero-eyebrow {
		margin-bottom: 14px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.hero-title {
		font-size: clamp(2.2rem, 6vw, 3.2rem);
	}

	.hero-tagline {
		margin: 14px auto 0;
		max-width: 640px;
		color: var(--text);
		font-size: clamp(1.1rem, 3vw, 1.4rem);
		font-weight: 500;
		line-height: 1.4;
	}

	.hero-sub {
		margin: 16px auto 0;
		max-width: 620px;
		color: color-mix(in srgb, var(--dim) 82%, white 18%);
		font-size: 1.02rem;
		line-height: 1.6;
	}

	.hero-actions {
		margin-top: 28px;
	}

	.cta-primary {
		display: inline-block;
		border: 1px solid var(--gold);
		border-radius: 8px;
		background: linear-gradient(135deg, rgb(232 69 69 / 0.18), rgb(240 192 64 / 0.14));
		padding: 14px 32px;
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-decoration: none;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.cta-primary:hover {
		border-color: var(--accent2);
		background: linear-gradient(135deg, rgb(232 69 69 / 0.28), rgb(240 192 64 / 0.22));
		box-shadow: 0 10px 30px rgb(240 192 64 / 0.15);
	}

	.how {
		margin-bottom: 40px;
	}

	.how-label {
		margin-bottom: 16px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 1.8px;
		text-align: center;
		text-transform: uppercase;
	}

	.how-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 16px;
	}

	.how-card {
		border: 1px solid color-mix(in srgb, var(--border) 86%, white 14%);
		border-radius: 14px;
		background: linear-gradient(180deg, rgb(18 20 28 / 0.88), rgb(12 14 20 / 0.94));
		padding: 24px;
	}

	.how-num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 999px;
		background: linear-gradient(135deg, var(--accent2), var(--gold));
		color: var(--bg);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
	}

	.how-card-title {
		margin: 14px 0 8px;
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	.how-card-body {
		margin: 0;
		color: var(--dim);
		font-size: 0.95rem;
		line-height: 1.55;
	}

	.why {
		border-radius: 14px;
		border-left: 3px solid var(--gold);
		background: rgb(240 192 64 / 0.05);
		padding: 24px 28px;
	}

	.why-heading {
		margin: 0 0 12px;
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.why-body {
		margin: 0;
		color: color-mix(in srgb, var(--dim) 88%, white 12%);
		font-size: 1rem;
		line-height: 1.65;
	}

	.why-body em {
		color: var(--text);
		font-style: italic;
	}

	.why-links {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 18px;
	}

	.why-link {
		color: var(--dim);
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		transition: color 0.2s;
	}

	.why-link:hover {
		color: var(--gold);
	}
</style>
