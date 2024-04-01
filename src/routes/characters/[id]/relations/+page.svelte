<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_RELATIONS, BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Textarea from '$components/Textarea.svelte';
	import { invalidate } from '$app/navigation';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ relations } = data.character);
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	let edit = '';
	let editIndex = 0;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = relations.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, relations: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const onDelete = async () => {
		const updated = relations.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, relations: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal}
	<Modal {onClose} {onDelete} {onSubmit}>
		<Textarea iLabel={LABEL.relation} bind:iValue={edit} iFor="relation" />
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].relations}</h1>

	<Content active label={NO_RELATIONS[$language]} empty={relations.length === 0}>
		{#if relations.length > 0}
			{#each relations as relation, index}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = relation;
						editIndex = index;
					}}
				>
					<Text>{relation}</Text>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'relations')} />
	</Content>
</CategoryPage>
