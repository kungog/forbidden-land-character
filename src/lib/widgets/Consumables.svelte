<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Box from '$lib/components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;

	const items = createArrayFromObject(consumables);

	const handleConsumablesModal = () => {
		$modal = {
			type: '',
			id: 'consumables'
		};
	};
</script>

<Box className="consumables" size="medium" handleClick={() => handleConsumablesModal()}>
	<div class="flex space-b align-c">
		{#each items as item}
			<Consumable type={item.key} dice={item.value} />
		{/each}
	</div>
</Box>
