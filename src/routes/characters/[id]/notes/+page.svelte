<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { language } from '$store';
	import { NO_NOTES, BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Textarea from '$components/Textarea.svelte';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ notes } = data.character);

	let showModal = false;
	$: edit = null as string | null;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<Textarea iLabel={GENERAL_LABELS[$language].note} iValue={edit} iFor="note" />
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].notes}</h1>

	<Content active>
		{#if notes.length > 0}
			{#each notes as note}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = note;
					}}
				>
					<Text>{note}</Text>
				</Box>
			{/each}
		{:else}
			<Text>{NO_NOTES[$language]}</Text>
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'notes')} />
	</Content>
</CategoryPage>
