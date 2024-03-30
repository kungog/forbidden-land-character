<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$lib/store';
	import { modal, showModal } from '$lib/store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';

	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ weapons } = data.character);

	const LABEL = GENERAL_LABELS[$language];
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].weapons}</h1>

	<Content active>
		{#each weapons as weapon, index}
			<Box
				transition
				handleClick={() => {
					$showModal = true;
					$modal = {
						type: 'weapons',
						index
					};
				}}
			>
				<div class="upper-part">
					<div class="flex space-b">
						<Text size="normal">{weapon.type}</Text>
						<Text>{weapon.additionals ?? ''}</Text>
					</div>

					<div class="flex stats">
						<Text>{LABEL['bonus']}: {weapon.bonus}</Text>
						<Text>{LABEL['damage']}: {weapon.damage}</Text>
						<Text>{LABEL['range']}: {weapon.range.toLocaleLowerCase()}</Text>
					</div>
				</div>
			</Box>
		{/each}
		<AddMore handleClick={() => addNewItem(data.character, 'weapon')} />
	</Content>
</CategoryPage>

<style>
	.stats {
		gap: var(--spacing-18);
	}
</style>
