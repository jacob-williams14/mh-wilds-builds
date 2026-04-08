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
