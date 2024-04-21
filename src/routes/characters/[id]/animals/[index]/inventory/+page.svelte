<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS, NO_INVENTORY_ANIMAL } from '$helpers/constants/languages';
	import { language, activeAnimal, showToaster } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem, objectValueToNumber } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ animals } = data.character);

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];
	let showModal = false;
	let edit: Inventory;
	let editIndex = 0;

	const index = Number($page.params.index);
	$: animal = animals[index];
	$: inventory = animal.inventory;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = inventory.map((_, index: number) =>
			index === editIndex ? objectValueToNumber(edit, ['name', 'bonus']) : _
		);

		const updatedAnimals = animals.map((animal, pos: number) =>
			pos === index ? { ...animal, inventory: updated } : animal
		);

		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, animals: updatedAnimals })
		});

		showModal = false;
		invalidate('viewed:character');

		$showToaster = {
			type: 'success',
			text: 'Updated: ' + edit.name,
			timeout: 3500
		};
	};

	const onDelete = async () => {
		const updated = inventory.filter((_, index: number) => index !== editIndex);
		const updatedAnimals = animals.map((animal, pos: number) =>
			pos === index ? { ...animal, inventory: updated } : animal
		);

		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, animals: updatedAnimals })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onDelete} {onSubmit}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.name} bind:iValue={edit.name} iFor="name" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="text" iLabel={LABEL.bonus} bind:iValue={edit.bonus} iFor="bonus" />
			<Input iType="number" iLabel={LABEL.weight} bind:iValue={edit.weight} iFor="weight" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input
				iType="text"
				iLabel={LABEL.additionals}
				bind:iValue={edit.additionals}
				iFor="additionals"
			/>
		</GridTemplate>
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABEL.inventory}</h1>
	<Content label={NO_INVENTORY_ANIMAL[$language]} empty={inventory.length === 0}>
		{#if inventory?.length > 0}
			{#each inventory as item, index}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = item;
						editIndex = index;
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
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'animal-inventory', index)} />
	</Content>
</CategoryPage>

<style>
	.stats {
		gap: var(--spacing-18);
	}
</style>
