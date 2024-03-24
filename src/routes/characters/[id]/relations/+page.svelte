<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_RELATIONS, BASE_LABELS } from '$helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
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

<CategoryPage>
	<h1>{BASE_LABELS[$language].relations}</h1>

	<Content active>
		{#if relations.length > 0}
			{#each relations as relation, index}
				<Box handleClick={() => handleRelationModal(index)}>
					<Text>{relation}</Text>
				</Box>
			{/each}
		{:else}
			<Text>{NO_RELATIONS[$language]}</Text>
		{/if}
	</Content>
</CategoryPage>
