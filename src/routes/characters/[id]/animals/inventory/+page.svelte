<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS, NO_INVENTORY_ANIMAL } from '$helpers/constants/languages';
	import { language, modal, showModal, activeAnimal } from '$lib/store';
	import CategoryPage from '$components/CategoryPage.svelte';
	import Content from '$components/Content.svelte';

	export let data: PageData;
	const { animals }: Character = data.character;

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];

	$: animalIndex = $activeAnimal;
	$: inventory =
		animals.length > 0 ? animals[$activeAnimal].inventory : ([] as [] | Animal['inventory']);

	const handleAnimalInventoryModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'animals_inventory',
			index: index,
			value: animals[animalIndex].inventory[index]
		};
	};

	const handleAnimalInventory = () => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'POST',
			key: 'animals_inventory',
			value: null,
			index: 0
		};
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].inventory}</h1>
	<Content>
		<div class="flex space-b">
			<Text size="normal">{BASE_LABEL['inventory']}</Text>
			<Box handleClick={() => handleAnimalInventory()}>
				<Text size="large">+</Text>
			</Box>
		</div>

		{#if inventory?.length > 0}
			{#each inventory as item, index}
				<Box handleClick={() => handleAnimalInventoryModal(index)}>
					<div class="upper-part">
						<div class="flex space-b">
							<Text size="normal">{item.name}</Text>
							<Text>{item.additionals ?? ''}</Text>
						</div>

						<div class="flex stats">
							<Text>{LABEL['weight']}: {item.weight}</Text>
							<Text>{LABEL['bonus']}: {item.bonus}</Text>
						</div>
					</div>
				</Box>
			{/each}
		{:else}
			<Text>{NO_INVENTORY_ANIMAL[$language]}</Text>
		{/if}
	</Content>
</CategoryPage>

<style>
	.stats {
		gap: var(--spacing-18);
	}
</style>
