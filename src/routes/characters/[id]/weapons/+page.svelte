<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$lib/store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS, NO_WEAPONS } from '$helpers/constants/languages';

	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import TrashIcon from '$icons/General/TrashIcon.svelte';
	import { invalidate } from '$app/navigation';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ weapons } = data.character);
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	let edit: Weapon | null = null;
	let editIndex = 0;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = weapons.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, weapons: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const onDelete = async () => {
		const updated = weapons.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, weapons: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const handleAddDice = () => {
		if (!edit) return console.error('Missing values in form');
		edit.extra_dices = [...edit.extra_dices, { value: 0, info: '' }];
	};

	const handleRemoveDice = (diceIndex: number) => {
		if (!edit) return console.error('Missing values in form');
		edit.extra_dices = edit.extra_dices.filter((_, index: number) => index !== diceIndex);
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onDelete} {onSubmit} specialButton={handleAddDice}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.weapons} bind:iValue={edit.type} iFor="type" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="text" iLabel={LABEL.bonus} bind:iValue={edit.bonus} iFor="bonus" />
			<Input iType="number" iLabel={LABEL.damage} bind:iValue={edit.damage} iFor="damage" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.range} bind:iValue={edit.range} iFor="range" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input
				iType="text"
				iLabel={LABEL.additionals}
				bind:iValue={edit.additionals}
				iFor="additionals"
			/>
		</GridTemplate>
		{#each edit.extra_dices as dice, index}
			<GridTemplate template="1fr 2fr 50px" gap={12}>
				<Input iType="number" iLabel={LABEL.damage} bind:iValue={dice.value} iFor="{index}_value" />
				<Input iType="text" iLabel={LABEL.bonus} bind:iValue={dice.info} iFor="{index}_info" />
				<button on:click={() => handleRemoveDice(index)} class="align-self-bottom warning">
					<TrashIcon color="var(--color-active)" width={38} height={38} />
				</button>
			</GridTemplate>
		{/each}
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].weapons}</h1>

	<Content active label={NO_WEAPONS[$language]} empty={weapons.length === 0}>
		{#each weapons as weapon, index}
			<Box
				transition
				handleClick={() => {
					showModal = true;
					edit = weapon;
					editIndex = index;
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
