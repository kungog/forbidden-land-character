<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_ANIMALS, GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language, modal } from '$lib/store';

	const { animals }: Character = $page.data.character;

	const LABELS = GENERAL_LABELS[$language];

	const handleAnimalModal = (type: number) => {
		$modal = {
			type,
			id: 'horse'
		};
	};
</script>

{#if animals.length > 0}
	{#each animals as animal, index}
		<Box handleClick={() => handleAnimalModal(index)}>
			<div class="upper-part">
				<div class="flex space-b">
					<Text size="normal">{animal.name}</Text>
				</div>

				<div class="flex stats">
					<Text>{LABELS['strength']}: {animal.strength}</Text>
					<Text>{LABELS['flexibility']}: {animal.flexibility}</Text>
				</div>
			</div>
		</Box>
	{/each}
{:else}
	<Text>{NO_ANIMALS[$language]}</Text>
{/if}

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
