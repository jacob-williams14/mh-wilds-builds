<script lang="ts">
	type Variant = 'damage' | 'comfort' | 'set';

	type Props = {
		title: string;
		items: string[];
		variant: Variant;
	};

	let { title, items, variant }: Props = $props();

	const variantClassMap: Record<Variant, string> = {
		damage: '',
		comfort: 'cs',
		set: 'ss'
	};
</script>

<div class="result-section">
	<div class="skills-title">{title}</div>
	<div class="skill-tags">
		{#each items as item (item)}
			<span class={`skill-tag ${variantClassMap[variant]}`.trim()}>{item}</span>
		{/each}
	</div>
</div>
