<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import Box from '$lib/components/Box.svelte';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';

	const { inventory }: Character = $page.data.character;

	const LABELS = GENERAL_LABELS[$language];
</script>

<div>
	{#each inventory as item}
		<Box handleClick={() => {}}>
			<div class="weapon">
				<div class="flex space-b">
					<Text size="small">{item.name}</Text>
					<Text size="small">{item.additionals ?? ''}</Text>
				</div>

				<div class="flex stats">
					<Text size="small">{LABELS['weight']}: {item.weight}</Text>
					<Text size="small">{LABELS['bonus']}: {item.bonus}</Text>
				</div>
			</div>
		</Box>
	{/each}
</div>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
	.weapon > :first-child {
		margin-bottom: 10px;
	}
</style>
