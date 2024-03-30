<script lang="ts">
	import type { PageData } from './$types';
	import Text from '$components/Text.svelte';
	import Box from '$components/Box.svelte';
	import { language, modal, showModal } from '$lib/store';
	import { GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import Coin from '$widgets/Parts/Coin.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ inventory, money } = data.character);

	const LABEL = GENERAL_LABELS[$language];
</script>

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].inventory}</h1>
		<div class="flex space-b align-c money">
			<Coin type="gold" amount={money.gold} />
			<Coin type="silver" amount={money.silver} />
			<Coin type="copper" amount={money.copper} />
		</div>
	</div>

	<Content active>
		{#each inventory as item, index}
			<Box
				transition
				handleClick={() => {
					$showModal = true;
					$modal = {
						type: 'inventory',
						index
					};
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
		<AddMore handleClick={() => addNewItem(data.character, 'inventory')} />
	</Content>
</CategoryPage>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}

	.money {
		gap: var(--spacing-08);
	}
</style>
