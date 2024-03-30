<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$store';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import Box from '$components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;
	const items = createArrayFromObject(consumables);
</script>

<Box
	className="consumables"
	size="medium"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'consumables',
			index: 0
		};
	}}
>
	<div class="flex space-b align-c">
		{#each items as item}
			<Consumable type={item.key} dice={item.value} />
		{/each}
	</div>
</Box>
