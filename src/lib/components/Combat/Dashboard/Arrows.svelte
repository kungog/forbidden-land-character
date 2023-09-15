<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';

	const { consumables }: Character = $page.data.character;

	const handleConsumablesModal = () => {
		$modal = {
			type: '',
			id: 'consumables'
		};
	};
</script>

<Box className="arrows" size="small" handleClick={() => handleConsumablesModal()}>
	<Consumable type={'arrows'} dice={consumables.arrows} />
</Box>
