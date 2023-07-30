<script lang="ts">
	import { page } from '$app/stores';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Box from '../../Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;

	const items = createArrayFromObject(consumables);
</script>

<div>
	<Box size="medium" handleClick={() => {}}>
		<div class="flex space-b align-c">
			{#each items as item}
				<Consumable type={item.key} dice={item.value} />
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
