<script lang="ts">
	import type { PageData } from './$types';
	import Text from '$components/Text.svelte';
	import Box from '$components/Box.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';

	export let data: PageData;
	const { inventory }: Character = data.character;

	const LABEL = GENERAL_LABELS[$language];

	const handleInventoryModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'inventory',
			index: index,
			value: inventory[index]
		};
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].inventory}</h1>

	<Content active>
		{#each inventory as item, index}
			<Box handleClick={() => handleInventoryModal(index)}>
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
	</Content>
</CategoryPage>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
