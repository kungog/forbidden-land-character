<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_ANIMALS, GENERAL_LABELS, BASE_LABELS } from '$helpers/constants/languages';
	import { language, showToaster } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { invalidate } from '$app/navigation';
	import InventoryIcon from '$icons/Menu/InventoryIcon.svelte';
	import { fly } from 'svelte/transition';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ animals } = data.character);
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	let edit: Animal | null = null;
	let editIndex = 0;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = animals.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, animals: updated })
		});

		showModal = false;
		invalidate('viewed:character');

		$showToaster = {
			type: 'success',
			text: 'Updated: ' + edit.name,
			timeout: 3500
		};
	};

	const onDelete = async () => {
		const updated = animals.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, animals: updated })
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
			<Input
				iType="text"
				iLabel={LABEL.flexibility}
				bind:iValue={edit.flexibility}
				iFor="flexibility"
			/>
			<Input iType="number" iLabel={LABEL.strength} bind:iValue={edit.strength} iFor="strength" />
		</GridTemplate>
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].animals}</h1>
	<Content active label={NO_ANIMALS[$language]} empty={animals.length === 0}>
		{#if animals.length > 0}
			{#each animals as animal, index}
				<section>
					<Box
						size="small"
						transition
						handleClick={() => {
							showModal = true;
							edit = animal;
							editIndex = index;
						}}
					>
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
					<a
						in:fly={{ y: 20 }}
						class="center"
						href={`/characters/${data.character._id}/animals/${index}/inventory`}
					>
						<InventoryIcon width={24} height={24} />
					</a>
				</section>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'animal')} />
	</Content>
</CategoryPage>

<style>
	section {
		display: grid;
		grid-template-columns: 4fr 1fr;
		gap: var(--spacing-08);
	}

	a {
		background: var(--color-box);
		border-radius: var(--radius-04);
	}

	.stats {
		gap: var(--spacing-18);
	}
</style>
