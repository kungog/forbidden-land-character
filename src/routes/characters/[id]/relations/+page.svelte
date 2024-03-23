<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_RELATIONS, BASE_LABELS } from '$helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';
	export let data: PageData;
	const { relations }: Character = data.character;

	const handleRelationModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'relations',
			index: index,
			value: relations[index]
		};
	};
</script>

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].relations}</h1>
</div>

<section class="flex column">
	{#if relations.length > 0}
		{#each relations as relation, index}
			<Box handleClick={() => handleRelationModal(index)}>
				<Text>{relation}</Text>
			</Box>
		{/each}
	{:else}
		<Text>{NO_RELATIONS[$language]}</Text>
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
