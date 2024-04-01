<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS, ADD_NEW_TALENT } from '$helpers/constants/languages';
	import Content from '$layouts/Content.svelte';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import PowerPoint from '$widgets/Parts/PowerPoint.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { BASE_URL, addNewItem, capitalize } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Divider from '$components/Divider.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	import { invalidate } from '$app/navigation';
	export let data: { character: Character; talents: Talent[] } & PageData;

	const LABEL = ADD_NEW_TALENT[$language];

	let showModal = false;
	let showPickTalent = false;
	let selected: CharacterTalent & Talent;
	let edit: CharacterTalent & Talent;
	let editIndex = 0;

	$: ({ talents } = data.character);
	$: dbTalents = data.talents;
	$: talentInfo = dbTalents.find((item) => item._id === edit?._id) as Talent;
	$: mergedTalents =
		(talents?.map((talent) => {
			const match = dbTalents.find((item) => item._id === talent._id);
			return match ? { ...talent, ...match } : talent;
		}) as (CharacterTalent & Talent)[]) ?? [];

	const onClose = () => {
		showModal = false;
		showPickTalent = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		const updated = talents.map((_, index: number) => (index === editIndex ? edit : _));
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, talents: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};

	const onDelete = async () => {
		const updated = talents.filter((_, index: number) => index !== editIndex);
		await fetch(BASE_URL + data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...data.character, talents: updated })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal
		{onClose}
		{onDelete}
		{onSubmit}
		icon="talent"
		specialButton={() => (showPickTalent = true)}
	>
		{#if showPickTalent}
			<div class="pick-talent center column">
				<Text selfCenter={false} size="medium">Välj talang</Text>

				<div class="talent-container flex column">
					{#each dbTalents as talent}
						<Box
							transition
							handleClick={() => {
								showPickTalent = false;
								edit = { ...edit, _id: talent._id };
							}}
						>
							{talent.name}
						</Box>
					{/each}
				</div>
			</div>
		{/if}

		{#if talentInfo}
			<Text selfCenter={false} size="small">{talentInfo?.description}</Text>
			<Divider size="small" />
			<Text selfCenter={false} size="small">{LABEL.one}: {talentInfo?.stages.one}</Text>
			<Divider size="small" />
			<Text selfCenter={false} size="small">{LABEL.two}: {talentInfo?.stages.two}</Text>
			<Divider size="small" />
			<Text selfCenter={false} size="small">{LABEL.three}: {talentInfo?.stages.three}</Text>
			<Divider size="small" />
		{/if}

		<Text selfCenter={false} size="normal">FV</Text>
		<input type="hidden" name="_id" value={edit._id} />
		<RadioButton bind:iValue={edit.value} iFor="value" amount={3} />
	</Modal>
{/if}

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].talents}</h1>
		<PowerPoint />
	</div>
	<Content active label={NO_TALENTS[$language]} empty={mergedTalents.length === 0}>
		{#if mergedTalents.length > 0}
			{#each mergedTalents as talent, index}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = talent;
						editIndex = index;
					}}
				>
					<div class="flex space-b">
						<Text size="normal">{talent.name ?? capitalize(talent._id)}</Text>
						{talent.value}
					</div>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'talent')} />
	</Content>
</CategoryPage>

<style>
	.pick-talent {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		height: 80%;
		width: 90%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--color-background);
		border-radius: var(--radius-04);
		gap: var(--spacing-12);
		padding: var(--spacing-18);
	}

	.talent-container {
		padding: var(--spacing-18);
		overflow-x: scroll;
		gap: var(--spacing-10);
		border: 1px solid var(--color-box);
		border-radius: var(--radius-04);
		width: 100%;
	}
</style>
