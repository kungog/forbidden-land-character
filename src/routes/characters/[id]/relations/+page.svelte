<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_RELATIONS, BASE_LABELS } from '$helpers/constants/languages';
	import { language, modal, showModal } from '$lib/store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ relations } = data.character);
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].relations}</h1>

	<Content active>
		{#if relations.length > 0}
			{#each relations as relation, index}
				<Box
					transition
					handleClick={() => {
						$showModal = true;
						$modal = {
							type: 'relations',
							index
						};
					}}
				>
					<Text>{relation}</Text>
				</Box>
			{/each}
		{:else}
			<Text>{NO_RELATIONS[$language]}</Text>
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'relations')} />
	</Content>
</CategoryPage>
