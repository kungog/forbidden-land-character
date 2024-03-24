<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_ANIMALS, GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';
	import { language, modal, showModal, activeAnimal } from '$lib/store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';

	export let data: PageData;
	const { animals }: Character = data.character;

	const LABEL = GENERAL_LABELS[$language];

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

	const handleAnimalClick = (index: number) => {
		if (index !== $activeAnimal) {
			return ($activeAnimal = index);
		}

		return handleModal(index);
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].animals}</h1>

	<Content active>
		{#if animals.length > 0}
			{#each animals as animal, index}
				<Box size="small" handleClick={() => handleAnimalClick(index)} transition>
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
	</Content>
</CategoryPage>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
