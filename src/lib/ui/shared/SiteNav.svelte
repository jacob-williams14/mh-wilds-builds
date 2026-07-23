<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const links = [
		{ label: 'Build', href: '/build' },
		{ label: 'About', href: '/about' },
		{ label: 'Sources', href: '/references' }
	] as const;

	// A link is active when the current path is the link or nested under it.
	function isActive(href: string): boolean {
		const path = page.url.pathname;
		return path === href || path.startsWith(`${href}/`);
	}
</script>

<nav class="site-nav">
	<div class="site-nav-inner">
		<a href={resolve('/')} class="wordmark">MH Wilds</a>
		<div class="nav-links">
			{#each links as link (link.href)}
				<a
					href={resolve(link.href)}
					class="nav-link"
					class:active={isActive(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.site-nav {
		position: sticky;
		top: 0;
		z-index: 10;
		border-bottom: 1px solid var(--border);
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: blur(10px);
	}

	.site-nav-inner {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		max-width: 1100px;
		padding: 12px 20px;
	}

	.wordmark {
		background: linear-gradient(135deg, var(--accent2), var(--gold));
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: 'Chakra Petch', sans-serif;
		font-size: 1.05rem;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 8px;
	}

	.nav-link {
		border-radius: 6px;
		padding: 6px 14px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: all 0.2s;
	}

	.nav-link:hover {
		color: var(--text);
	}

	.nav-link.active {
		background: color-mix(in srgb, var(--gold) 12%, transparent);
		color: var(--gold);
	}

	@media (width <= 640px) {
		.nav-link {
			padding-inline: 10px;
			font-size: 0.75rem;
		}
	}
</style>
