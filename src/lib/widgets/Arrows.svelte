<script lang="ts">
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';
	import type { PageData } from '../../routes/$types';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ consumables } = data.character);
</script>

<Box
	className="arrows"
	size="small"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'consumables',
			index: 0
		};
	}}
>
	<Consumable type={'arrows'} dice={consumables.arrows} />
</Box>
