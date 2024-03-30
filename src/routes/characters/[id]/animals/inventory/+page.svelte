<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS, NO_INVENTORY_ANIMAL } from '$helpers/constants/languages';
	import { language, modal, showModal, activeAnimal } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ animals } = data.character);

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];

	$: animalIndex = $activeAnimal;
	$: inventory =
		animals.length > 0 ? animals[$activeAnimal].inventory : ([] as [] | Animal['inventory']);
</script>

<CategoryPage>
	<h1>{BASE_LABEL.inventory}</h1>
	<Content>
		{#if inventory?.length > 0}
			{#each inventory as item, index}
				<Box
					transition
					handleClick={() => {
						$showModal = true;
						$modal = {
							type: 'animals_inventory',
							index
						};
					}}
				>
					<div class="upper-part">
						<div class="flex space-b">
							<Text size="normal">{item.name}</Text>
							<Text>{item.additionals ?? ''}</Text>
						</div>

						<div class="flex stats">
							<Text>{LABEL.weight}: {item.weight}</Text>
							<Text>{LABEL.bonus}: {item.bonus}</Text>
						</div>
					</div>
				</Box>
			{/each}
		{:else}
			<Text>{NO_INVENTORY_ANIMAL[$language]}</Text>
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'animal-inventory')} />
	</Content>
</CategoryPage>

<style>
	.stats {
		gap: var(--spacing-18);
	}
</style>
