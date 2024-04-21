<script lang="ts">
	import type { PageData } from './$types';
	import { language, showToaster } from '$lib/store';
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
	import { DICE_TYPES, PLAYER_REACH } from '$helpers/constants/game';
	import Dice from '$components/Dice.svelte';
	import Select from '$components/Select.svelte';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ weapons, basic_properties, skills } = data.character);
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

		$showToaster = {
			type: 'success',
			text: 'Updated: ' + edit.type,
			timeout: 3500
		};
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

	$: strength = basic_properties.find((item) => item.id === 'strength') ?? {
		id: 'strength',
		value: 1,
		failure: 0
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
			<Select iLabel={LABEL.range} iFor="range" bind:iValue={edit.range}>
				{#each PLAYER_REACH[$language] as reach}
					<option value={reach.id}>
						{reach.text}
					</option>
				{/each}
			</Select>
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
				<Select iLabel={LABEL.damage} iFor="{index}_value" bind:iValue={dice.value}>
					{#each DICE_TYPES as dice}
						<option value={dice.id}>
							{dice.text}
						</option>
					{/each}
				</Select>
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
				<div class="flex space-b">
					<div>
						<div class="upper-part">
							<Text size="normal">{weapon.type}</Text>
						</div>

						<div class="flex column stats">
							<Text selfCenter={false}>
								{LABEL['range']}:
								{PLAYER_REACH[$language].find((reach) => reach.id === weapon.range)?.text}
							</Text>
							<Text selfCenter={false}>{LABEL['damage']}: {weapon.damage}</Text>
							<Text selfCenter={false}>{weapon.additionals ?? ''}</Text>
						</div>
					</div>
					<div class="flex column dices">
						<div class="flex">
							{#each Array(strength?.value - strength?.failure) as _}
								<Dice type="property" amount="" size={20} />
							{/each}
						</div>
						<div class="flex">
							{#each Array(skills.close_combat) as _}
								<Dice type="skill" amount="" size={20} />
							{/each}
						</div>
						<div class="flex">
							{#each Array(weapon.bonus) as _}
								<Dice type="attack" amount="" size={20} />
							{/each}
						</div>

						{#each weapon.extra_dices as dice}
							<Dice type="extra" amount={' T' + dice.value} size={20} />
						{/each}
					</div>
				</div>
			</Box>
		{/each}
		<AddMore handleClick={() => addNewItem(data.character, 'weapon')} />
	</Content>
</CategoryPage>

<style>
	.stats {
		gap: var(--spacing-08);
	}

	.dices {
		align-items: flex-end;
	}
</style>
