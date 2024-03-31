<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS, NO_INVENTORY_ANIMAL } from '$helpers/constants/languages';
	import { language, activeAnimal } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ animals } = data.character);
	$: edit = null as Inventory | null;

	const LABEL = GENERAL_LABELS[$language];
	const BASE_LABEL = BASE_LABELS[$language];
	let showModal = false;

	$: animalIndex = $activeAnimal;
	$: inventory =
		animals.length > 0 ? animals[$activeAnimal].inventory : ([] as [] | Animal['inventory']);
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.name} iValue={edit.name} iFor="name" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="text" iLabel={LABEL.bonus} iValue={edit.bonus} iFor="bonus" />
			<Input iType="number" iLabel={LABEL.weight} iValue={edit.weight} iFor="weight" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.additionals} iValue={edit.additionals} iFor="additionals" />
		</GridTemplate>
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABEL.inventory}</h1>
	<Content>
		{#if inventory?.length > 0}
			{#each inventory as item}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = item;
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
