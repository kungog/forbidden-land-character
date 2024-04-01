<script lang="ts">
	import type { PageData } from './$types';
	import Text from '$components/Text.svelte';
	import Box from '$components/Box.svelte';
	import { language } from '$store';
	import { GENERAL_LABELS, BASE_LABELS, NO_INVENTORY } from '$helpers/constants/languages';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import Coin from '$widgets/Parts/Coin.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { invalidate } from '$app/navigation';

	export let data: { character: Character; talents: Talent[] } & PageData;
	const LABEL = GENERAL_LABELS[$language];
	$: ({ inventory, money } = data.character);

	let showModal = false;
	let edit: Inventory | null = null;
	let editIndex = 0;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.log('Error');
		const updated = inventory.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, inventory: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const onDelete = async () => {
		const updated = inventory.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, inventory: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onDelete} {onSubmit}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.name} bind:iValue={edit.name} iFor="name" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="text" iLabel={LABEL.bonus} bind:iValue={edit.bonus} iFor="bonus" />
			<Input iType="number" iLabel={LABEL.weight} bind:iValue={edit.weight} iFor="weight" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input
				iType="text"
				iLabel={LABEL.additionals}
				bind:iValue={edit.additionals}
				iFor="additionals"
			/>
		</GridTemplate>
	</Modal>
{/if}

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].inventory}</h1>
		<div class="flex space-b align-c money">
			<Coin type="gold" amount={money.gold} />
			<Coin type="silver" amount={money.silver} />
			<Coin type="copper" amount={money.copper} />
		</div>
	</div>

	<Content active label={NO_INVENTORY[$language]} empty={inventory.length === 0}>
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
