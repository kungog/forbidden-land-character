<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { language, modal, showModal } from '$store';
	import { NO_NOTES, BASE_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ notes } = data.character);
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].notes}</h1>

	<Content active>
		{#if notes.length > 0}
			{#each notes as note, index}
				<Box
					transition
					handleClick={() => {
						$showModal = true;
						$modal = {
							type: 'notes',
							index
						};
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
