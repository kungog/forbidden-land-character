<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import Box from '$components/Box.svelte';
	import Consumable from './Parts/Consumable.svelte';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';

	const { consumables }: Character = $page.data.character;
	const items = createArrayFromObject(consumables);

	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	$: edit = consumables;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.arrows} iValue={edit.arrows} iFor="arrows" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.food} iValue={edit.food} iFor="food" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.torches} iValue={edit.torches} iFor="torches" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.water} iValue={edit.water} iFor="water" />
		</GridTemplate>
	</Modal>
{/if}

<Box className="consumables" size="medium" handleClick={() => (showModal = true)}>
	<div class="flex space-b align-c">
		{#each items as item}
			<Consumable type={item.key} dice={item.value} />
		{/each}
	</div>
</Box>
