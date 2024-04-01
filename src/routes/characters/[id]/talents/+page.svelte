<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS } from '$helpers/constants/languages';
	import Content from '$layouts/Content.svelte';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import PowerPoint from '$widgets/Parts/PowerPoint.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Divider from '$components/Divider.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ talents } = data.character);
	$: edit = null as (CharacterTalent & Talent) | null;

	let showModal = false;
	const dbTalents = data.talents;
	const mergedTalents =
		(talents?.map((talent) => {
			const match = dbTalents.find((item) => item._id === talent._id);
			return match ? { ...talent, ...match } : talent;
		}) as (CharacterTalent & Talent)[]) ?? [];

	const talentInfo = dbTalents.find((item) => item._id === edit?._id) as Talent;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<Text selfCenter={false} size="small">{talentInfo.description}</Text>
		<Divider size="small" />
		<Text selfCenter={false} size="small">Nivå 1: {talentInfo.stages.one}</Text>
		<Divider size="small" />
		<Text selfCenter={false} size="small">Nivå 2: {talentInfo.stages.two}</Text>
		<Divider size="small" />
		<Text selfCenter={false} size="small">Nivå 3: {talentInfo.stages.three}</Text>
		<Divider size="small" />

		<Text selfCenter={false} size="normal">FV</Text>
		<input type="hidden" name="_id" value={edit._id} />
		<RadioButton iValue={edit.value} iFor="value" amount={3} />
	</Modal>
{/if}

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].talents}</h1>
		<PowerPoint />
	</div>
	<Content active label={NO_TALENTS[$language]} empty={mergedTalents.length === 0}>
		{#if mergedTalents.length > 0}
			{#each mergedTalents as talent}
				<Box transition handleClick={() => (showModal = true)}>
					<div class="flex space-b">
						<Text size="normal">{talent.name}</Text>
						{talent.value}
					</div>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'talent')} />
	</Content>
</CategoryPage>
