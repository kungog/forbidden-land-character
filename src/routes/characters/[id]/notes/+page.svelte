<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { NO_NOTES, BASE_LABELS } from '$lib/helpers/constants/languages';

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

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].notes}</h1>
</div>

<section class="flex column">
	{#if notes.length > 0}
		{#each notes as note, index}
			<Box handleClick={() => handleNoteModal(index)}>
				<Text>{note}</Text>
			</Box>
		{/each}
	{:else}
		<Text>{NO_NOTES[$language]}</Text>
	{/if}
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}
</style>
