<script lang="ts">
	import { resolve } from '$app/paths';
	import { generalSources, weaponSources, type SourceType } from '$lib/data/references';

	const typeLabel: Record<SourceType, string> = {
		'google-doc': 'Google Doc',
		'game-wiki': 'Game Wiki',
		video: 'Video',
		community: 'Community'
	};

	const typeClass: Record<SourceType, string> = {
		'google-doc': 'badge-gold',
		'game-wiki': 'badge-blue',
		video: 'badge-red',
		community: 'badge-dim'
	};
</script>

<svelte:head>
	<title>Sources & References — MH Wilds Build Selector</title>
</svelte:head>

<div class="app-shell">
	<header class="refs-header">
		<a href={resolve('/')} class="back-link">← Back</a>
		<h1 class="app-title">Sources & References</h1>
		<p class="refs-lead">
			All builds are sourced from the community. These are the primary references used to build and
			verify each weapon's loadouts.
		</p>
	</header>

	{#if generalSources.length > 0}
		<section class="refs-section">
			<h2 class="refs-heading">General</h2>
			<div class="source-list">
				{#each generalSources as source (source.name)}
					<div class="source-row">
						<div class="source-main">
							{#if source.url !== '#'}
								<a
									href={source.url}
									target="_blank"
									rel="external noopener noreferrer"
									class="source-name">{source.name}</a
								>
							{:else}
								<span class="source-name source-name--tbd">{source.name}</span>
							{/if}
							{#if source.author}
								<span class="source-author">{source.author}</span>
							{/if}
						</div>
						<div class="source-meta">
							<span class="source-badge {typeClass[source.type]}">{typeLabel[source.type]}</span>
							{#if source.note}
								<p class="source-note">{source.note}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#each weaponSources as group (group.weapon)}
		<section class="refs-section">
			<h2 class="refs-heading">{group.weapon}</h2>
			<div class="source-list">
				{#each group.sources as source (source.name)}
					<div class="source-row">
						<div class="source-main">
							{#if source.url !== '#'}
								<a
									href={source.url}
									target="_blank"
									rel="external noopener noreferrer"
									class="source-name">{source.name}</a
								>
							{:else}
								<span class="source-name source-name--tbd">{source.name}</span>
							{/if}
							{#if source.author}
								<span class="source-author">{source.author}</span>
							{/if}
						</div>
						<div class="source-meta">
							<span class="source-badge {typeClass[source.type]}">{typeLabel[source.type]}</span>
							{#if source.note}
								<p class="source-note">{source.note}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.refs-header {
		margin-bottom: 40px;
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

	.refs-lead {
		margin-top: 10px;
		color: var(--dim);
		font-size: 1rem;
		line-height: 1.6;
		max-width: 640px;
	}

	.refs-section {
		margin-bottom: 40px;
	}

	.refs-heading {
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

	.source-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.source-row {
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 16px 20px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 20px;
	}

	.source-main {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.source-name {
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		text-decoration: none;
	}

	a.source-name:hover {
		color: var(--accent);
	}

	.source-name--tbd {
		color: var(--dim);
	}

	.source-author {
		font-size: 0.85rem;
		color: var(--dim);
	}

	.source-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 8px;
		flex-shrink: 0;
	}

	.source-note {
		font-size: 0.85rem;
		color: var(--dim);
		line-height: 1.5;
		text-align: right;
		max-width: 320px;
	}

	.source-badge {
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding: 3px 8px;
		border-radius: 4px;
	}

	.badge-gold {
		background: rgb(240 192 64 / 0.15);
		color: var(--gold);
	}

	.badge-blue {
		background: rgb(74 158 255 / 0.15);
		color: var(--blue);
	}

	.badge-red {
		background: rgb(232 69 69 / 0.15);
		color: var(--accent);
	}

	.badge-dim {
		background: rgb(122 125 138 / 0.15);
		color: var(--dim);
	}

	@media (width <= 600px) {
		.source-row {
			flex-direction: column;
		}

		.source-meta {
			align-items: flex-start;
		}

		.source-note {
			text-align: left;
		}
	}
</style>
