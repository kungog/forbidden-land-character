<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Condition from './Parts/Condition.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
</script>

<div>
	<Box size="small" handleClick={() => {}}>
		<div class="flex space-b align-c">
			<div class="flex align-c">
				{critical ?? 'No critical injuries'}
			</div>
			<div class="flex align-c">
				{#each Object.entries(condition) as [key, value]}
					<Condition type={key} isActive={value} />
				{/each}
			</div>
		</div>
	</Box>
</div>

<style lang="scss">
	div:has(button) {
		grid-area: condition;
		width: 100%;
	}
</style>
