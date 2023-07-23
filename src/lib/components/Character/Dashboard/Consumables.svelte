<script lang="ts">
	import Box from '../../Box.svelte';
	import Consumable from './Parts/Consumable.svelte';
	export let consumables: Character['consumables'];
</script>

<div>
	<Box size="medium" handleClick={() => {}}>
		<div class="flex space-b align-c">
			{#each Object.entries(consumables) as [key, value]}
				<Consumable type={key} dice={value} />
			{/each}
		</div>
	</Box>
</div>

<style lang="scss">
	div:has(button) {
		grid-area: consumables;
		width: 100%;
	}
</style>
