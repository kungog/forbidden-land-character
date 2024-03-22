<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import {
		NO_ANIMALS,
		GENERAL_LABELS,
		BASE_LABELS,
		NO_INVENTORY_ANIMAL
	} from '$lib/helpers/constants/languages';
	import { language, modal, showModal, activeAnimal } from '$lib/store';

	export let data: PageData;
	const { animals }: Character = data.character;

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];

	$: animalIndex = $activeAnimal;
	$: inventory =
		animals.length > 0 ? animals[$activeAnimal].inventory : ([] as [] | Animal['inventory']);

	//FIXME
	const handleModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'animals',
			index: index,
			value: animals[index]
		};
	};

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

	const handleAnimalClick = (index: number) => {
		if (index !== $activeAnimal) {
			return ($activeAnimal = index);
		}

		return handleModal(index);
	};
</script>

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].animals}</h1>
</div>

<section class="flex column">
	{#if animals.length > 0}
		{#each animals as animal, index}
			<Box
				size="small"
				handleClick={() => handleAnimalClick(index)}
				active={index === $activeAnimal}
				transition
			>
				<div class="upper-part">
					<div class="flex space-b">
						<Text size="normal">{animal.name}</Text>
					</div>

					<div class="flex stats">
						<Text>{LABEL['strength']}: {animal.strength}</Text>
						<Text>{LABEL['flexibility']}: {animal.flexibility}</Text>
					</div>
				</div>
			</Box>
		{/each}
	{:else}
		<Text>{NO_ANIMALS[$language]}</Text>
	{/if}

	<div class="test flex space-b">
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
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}

	.stats {
		gap: var(--spacing-18);
	}

	.test {
		margin-top: var(--spacing-18);
	}
</style>
