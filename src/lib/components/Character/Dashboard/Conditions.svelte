<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Condition from './Parts/Condition.svelte';

	export let condition: Character['condition'], critical: Character['critical_injuries'];
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
