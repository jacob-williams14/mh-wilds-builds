<script lang="ts">
	import type { FlowOption } from '$lib/data/types';

	type Props = {
		stepLabel: string;
		text: string;
		options: FlowOption[];
		selectedValue: string | null;
		active?: boolean;
		completed?: boolean;
		hidden?: boolean;
		onAnswer: (value: string) => void;
	};

	let {
		stepLabel,
		text,
		options,
		selectedValue,
		active = false,
		completed = false,
		hidden = false,
		onAnswer
	}: Props = $props();
</script>

{#if !hidden}
	<div class:active class:completed class="question-node">
		<div class="q-label">{stepLabel}</div>
		<div class="q-text">{text}</div>
		<div class="options">
			{#each options as option (option.value)}
				<button
					type="button"
					class:selected={selectedValue === option.value}
					class:balanced={option.cssClass === 'balanced'}
					class:comfort={option.cssClass === 'comfort'}
					class="opt-btn"
					onclick={() => onAnswer(option.value)}
				>
					{option.label}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	.question-node {
		margin-bottom: 0;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--card);
		padding: 28px 32px;
		transition: all 0.3s;
	}

	.question-node.active {
		border-color: var(--accent);
		box-shadow: 0 0 24px rgb(232 69 69 / 0.12);
	}

	.question-node.completed {
		border-color: var(--green);
		opacity: 0.7;
	}

	.q-label {
		margin-bottom: 8px;
		color: var(--dim);
		font-family: 'Chakra Petch', sans-serif;
		font-size: 0.7rem;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.q-text {
		margin-bottom: 20px;
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.opt-btn {
		flex: 1 1 240px;
		min-height: 52px;
		border: 1px solid rgb(232 69 69 / 0.25);
		border-radius: 6px;
		background: rgb(232 69 69 / 0.08);
		padding: 10px 24px;
		color: var(--text);
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0.5px;
		transition: all 0.2s;
	}

	.opt-btn:hover {
		transform: translateY(-1px);
		border-color: var(--accent);
		background: rgb(232 69 69 / 0.2);
	}

	.opt-btn.selected {
		border-color: var(--accent);
		background: var(--accent);
		color: #fff;
	}

	.opt-btn.balanced {
		border-color: rgb(74 158 255 / 0.25);
		background: rgb(74 158 255 / 0.08);
	}

	.opt-btn.balanced:hover {
		border-color: var(--blue);
		background: rgb(74 158 255 / 0.2);
	}

	.opt-btn.balanced.selected {
		border-color: var(--blue);
		background: var(--blue);
		color: #000;
	}

	.opt-btn.comfort {
		border-color: rgb(61 214 140 / 0.25);
		background: rgb(61 214 140 / 0.08);
	}

	.opt-btn.comfort:hover {
		border-color: var(--green);
		background: rgb(61 214 140 / 0.2);
	}

	.opt-btn.comfort.selected {
		border-color: var(--green);
		background: var(--green);
		color: #000;
	}

	@media (width <= 640px) {
		.question-node {
			padding: 24px 20px;
		}

		.opt-btn {
			flex-basis: 100%;
		}
	}
</style>
