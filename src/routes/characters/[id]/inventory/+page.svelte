<script lang="ts">
	import type { PageData } from './$types';
	import Text from '$components/Text.svelte';
	import Box from '$components/Box.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';

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

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].inventory}</h1>
</div>

<section class="flex column">
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
</style>
