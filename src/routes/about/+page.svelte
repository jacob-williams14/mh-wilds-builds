<script lang="ts">
	import { resolve } from '$app/paths';

	// No avatar for now — when an in-game character screenshot is ready, add it to
	// src/lib/assets/, import it here, and restore the dev-avatar block in the card below.
	const dev = {
		name: 'jWill',
		handle: '',
		bio: [
			"I'm jWill — a software developer by day who hunts on nights and weekends. I built " +
				'this so picking an endgame build starts with how you actually like to play, not with ' +
				'an hour of cross-referencing spreadsheets, wiki tabs, and Discord screenshots.',
			"It's a solo side project — no ads, no accounts, no cookies; just anonymous page " +
				'counts to see if anyone visits. If it saved you a crafting headache, a coffee keeps ' +
				'the late-night data transcription going.'
		],
		supportUrl: 'https://buymeacoffee.com/jwill',
		links: [] as { label: string; url: string }[]
	};
</script>

<svelte:head>
	<title>About — MH Wilds Build Selector</title>
	<meta
		name="description"
		content="What the MH Wilds Build Selector is, the feel-first philosophy behind it, how the two-step flow works, and how builds are sourced."
	/>
</svelte:head>

<div class="app-shell">
	<header class="about-header">
		<a href={resolve('/')} class="back-link">← Back</a>
		<h1 class="app-title">About</h1>
		<p class="about-lead">
			A feel-first Monster Hunter Wilds build selector. Choose a weapon, answer two quick questions
			about your playstyle, and get an endgame armor build that favors comfort, flow, and
			consistency.
		</p>
	</header>

	<section class="about-section">
		<h2 class="about-heading">Philosophy</h2>
		<p class="about-body">
			Most build guides optimize for the highest possible damage number. This one optimizes for how
			a build <em>feels</em> to play. Armor is the playstyle decision — it decides whether you trade blows,
			dodge everything, or sharpen and mount without breaking flow. Weapons are about access: Artian and
			Gogma Artian are best in slot, with non-Artian alternatives listed for when you can't craft one
			yet.
		</p>
	</section>

	<section class="about-section">
		<h2 class="about-heading">How it works</h2>
		<ol class="about-steps">
			<li><strong>Pick a weapon</strong> and your Hunter Rank tier (HR 50–100 or HR 100+).</li>
			<li>
				<strong>Answer two questions</strong> — the first about what you want out of the build (damage,
				balance, or comfort), the second about how you like to play it.
			</li>
			<li>
				<strong>Get one build.</strong> Each path resolves to a single loadout with skills, decorations,
				a recommended meal, and the weapon to aim for. Switch weapons or start over at any time.
			</li>
		</ol>
	</section>

	<section class="about-section">
		<h2 class="about-heading">Where builds come from</h2>
		<p class="about-body">
			Every build is transcribed and cross-referenced from community sources — Game8, the community
			Google Docs, and creator guides — then verified for skill levels, decorations, and set
			bonuses. When sources disagree, detail pages win over summaries. Anything unverified is
			flagged in the data. See the
			<a href={resolve('/references')} class="inline-link">full list of sources</a> for every weapon.
		</p>
	</section>

	<section class="about-section">
		<h2 class="about-heading">Disclaimer</h2>
		<p class="about-body">
			This is a fan-made tool and is not affiliated with Capcom. Monster Hunter Wilds and all
			related names are trademarks of Capcom. Builds reflect a point-in-time snapshot of the game's
			balance and the community's consensus — they can drift as title updates land.
		</p>
	</section>

	<section class="about-section who-made-this">
		<h2 class="about-heading">Who made this</h2>
		<div class="dev-card">
			<div class="dev-identity">
				<div class="dev-name-block">
					<span class="dev-name">{dev.name}</span>
					{#if dev.handle}
						<span class="dev-handle">{dev.handle}</span>
					{/if}
				</div>
			</div>
			{#each dev.bio as line (line)}
				<p class="about-body">{line}</p>
			{/each}
			{#if dev.links.length > 0}
				<div class="dev-links">
					{#each dev.links as link (link.label)}
						<a
							href={link.url}
							target="_blank"
							rel="external noopener noreferrer"
							class="inline-link">{link.label}</a
						>
					{/each}
				</div>
			{/if}
			<a href={dev.supportUrl} target="_blank" rel="external noopener noreferrer" class="coffee-btn"
				>☕ Buy me a coffee</a
			>
		</div>
	</section>

	<div class="about-footer">
		<a href={resolve('/')} class="back-link">← Back to the build selector</a>
	</div>
</div>

<style>
	.about-header {
		max-width: 720px;
		margin: 0 auto 40px;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 20px;
		color: var(--dim);
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-decoration: none;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: var(--accent);
	}

	.about-lead {
		margin-top: 10px;
		color: var(--dim);
		font-size: 1rem;
		line-height: 1.6;
	}

	.about-section {
		max-width: 720px;
		margin: 0 auto 36px;
	}

	.about-heading {
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 16px;
		padding-bottom: 8px;
		border-bottom: 1px solid var(--border);
	}

	.about-body {
		color: color-mix(in srgb, var(--dim) 82%, white 18%);
		font-size: 1rem;
		line-height: 1.7;
	}

	.about-body em {
		color: var(--text);
		font-style: italic;
	}

	.about-steps {
		margin: 0;
		padding-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		color: color-mix(in srgb, var(--dim) 82%, white 18%);
		font-size: 1rem;
		line-height: 1.6;
	}

	.about-steps strong {
		color: var(--text);
	}

	.inline-link {
		color: var(--gold);
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}

	.inline-link:hover {
		color: var(--accent);
	}

	.dev-card {
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.dev-identity {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.dev-name-block {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.dev-name {
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--text);
	}

	.dev-handle {
		font-size: 0.9rem;
		color: var(--dim);
	}

	.dev-card .about-body {
		margin: 0;
	}

	.dev-links {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 20px;
	}

	.coffee-btn {
		align-self: flex-start;
		margin-top: 4px;
		border: 1px solid var(--gold);
		border-radius: 8px;
		background: rgb(240 192 64 / 0.12);
		padding: 10px 22px;
		color: var(--gold);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		letter-spacing: 0.5px;
		text-decoration: none;
		transition:
			background 0.2s,
			transform 0.1s;
	}

	.coffee-btn:hover {
		background: rgb(240 192 64 / 0.22);
		transform: translateY(-1px);
	}

	.about-footer {
		max-width: 720px;
		margin: 8px auto 0;
		padding-top: 24px;
		border-top: 1px solid var(--border);
	}

	.about-footer .back-link {
		margin-bottom: 0;
	}
</style>
