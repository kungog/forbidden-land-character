<script lang="ts">
	import type { PageData } from './$types';
	import { invalidate } from '$app/navigation';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { language } from '$store';
	import { NO_NOTES, BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Textarea from '$components/Textarea.svelte';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ notes } = data.character);

	let showModal = false;
	let edit = '';
	let editIndex = 0;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = notes.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, notes: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const onDelete = async () => {
		const updated = notes.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, notes: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal}
	<Modal {onClose} {onDelete} {onSubmit}>
		<Textarea iLabel={GENERAL_LABELS[$language].note} bind:iValue={edit} iFor="note" />
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].notes}</h1>

	<Content active label={NO_NOTES[$language]} empty={notes.length === 0}>
		{#if notes.length > 0}
			{#each notes as note, index}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = note;
						editIndex = index;
					}}
				>
					<Text>{note}</Text>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'notes')} />
	</Content>
</CategoryPage>
