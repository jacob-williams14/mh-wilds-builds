<script lang="ts">
	import type { RankRange } from '$lib/data/types';

	type Props = {
		selected: RankRange;
		onSelect: (range: RankRange) => void;
	};

	let { selected, onSelect }: Props = $props();
</script>

<div class="rank-selector">
	<button
		type="button"
		class:active={selected === 'hr50'}
		class="rank-btn"
		onclick={() => onSelect('hr50')}
	>
		HR 50–100
	</button>
	<button
		type="button"
		class:active={selected === 'hr100'}
		class="rank-btn"
		onclick={() => onSelect('hr100')}
	>
		HR 100+
	</button>
</div>
