<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_ANIMALS, GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';
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
	let showModal = false;
	$: edit = null as Animal | null;
	const LABEL = GENERAL_LABELS[$language];

	const handleAnimalClick = (index: number, animal: Animal) => {
		if (index !== $activeAnimal) return ($activeAnimal = index);

		edit = animal;
		showModal = true;
	};
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.name} iValue={edit.name} iFor="name" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="text" iLabel={LABEL.flexibility} iValue={edit.flexibility} iFor="flexibility" />
			<Input iType="number" iLabel={LABEL.strength} iValue={edit.strength} iFor="strength" />
		</GridTemplate>
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].animals}</h1>
	<Content active label={NO_ANIMALS[$language]} empty={animals.length === 0}>
		{#if animals.length > 0}
			{#each animals as animal, index}
				<Box size="small" handleClick={() => handleAnimalClick(index, animal)} transition>
					<div class="upper-part">
						<div class="flex space-b">
							<Text size="normal">{animal.name}</Text>
						</div>

						<div class="flex stats">
							<Text>{LABEL.strength}: {animal.strength}</Text>
							<Text>{LABEL.flexibility}: {animal.flexibility}</Text>
						</div>
					</div>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'animal')} />
	</Content>
</CategoryPage>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
