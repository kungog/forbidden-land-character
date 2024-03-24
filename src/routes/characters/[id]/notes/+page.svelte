<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { NO_NOTES, BASE_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$components/CategoryPage.svelte';
	import Content from '$components/Content.svelte';

	export let data: PageData;
	const { notes }: Character = data.character;

	const handleNoteModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'notes',
			index: index,
			value: notes[index]
		};
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].notes}</h1>

	<Content>
		{#if notes.length > 0}
			{#each notes as note, index}
				<Box handleClick={() => handleNoteModal(index)}>
					<Text>{note}</Text>
				</Box>
			{/each}
		{:else}
			<Text>{NO_NOTES[$language]}</Text>
		{/if}
	</Content>
</CategoryPage>
