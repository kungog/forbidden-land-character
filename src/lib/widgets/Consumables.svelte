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
	import { invalidate } from '$app/navigation';
	import { BASE_URL } from '$helpers/utilites';

	const { consumables }: Character = $page.data.character;
	$: items = createArrayFromObject(consumables);

	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	let edit = consumables;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + $page.data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...$page.data.character, consumables: edit })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.arrows} bind:iValue={edit.arrows} iFor="arrows" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.food} bind:iValue={edit.food} iFor="food" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.torches} bind:iValue={edit.torches} iFor="torches" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.water} bind:iValue={edit.water} iFor="water" />
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
