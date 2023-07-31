<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import Box from '$lib/components/Box.svelte';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';

	const { inventory }: Character = $page.data.character;

	const LABELS = GENERAL_LABELS[$language];
</script>

{#each inventory as item}
	<Box handleClick={() => {}}>
		<div class="upper-part">
			<div class="flex space-b">
				<Text size="normal">{item.name}</Text>
				<Text>{item.additionals ?? ''}</Text>
			</div>

			<div class="flex stats">
				<Text>{LABELS['weight']}: {item.weight}</Text>
				<Text>{LABELS['bonus']}: {item.bonus}</Text>
			</div>
		</div>
	</Box>
{/each}

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
