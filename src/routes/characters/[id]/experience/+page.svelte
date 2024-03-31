<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$store';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import { SKILLS } from '$helpers/constants/skills';
	import { getSkillDice } from '$helpers/getDices';
	import { BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';

	import Box from '$components/Box.svelte';
	import Dices from '$components/Dices.svelte';
	import Text from '$components/Text.svelte';
	import CharismaIcon from '$icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '$icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '$icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '$icons/Property/StrengthIcon.svelte';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import Experience from '$widgets/Parts/Experience.svelte';
	import Modal from '$components/Modal.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	export let data: { character: Character; talents: Talent[] } & PageData;
	let { skills, basic_properties } = data.character;

	const items = createArrayFromObject(skills ?? {});
	const propertyIcon = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};

	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	$: edit = null as {
		key: keyof Skills;
		value: number;
	} | null;
</script>

{#if showModal && edit}
	<Modal
		label={SKILLS[edit.key].languages[$language]}
		handleClose={() => (showModal = false)}
		handleRemove={() => console.log('Delete: ', edit)}
	>
		<Text selfCenter={false} size="normal">FV</Text>
		<RadioButton iValue={edit.value} iFor={edit.key} />
	</Modal>
{/if}

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].experience}</h1>
		<Experience />
	</div>
	<Content active>
		{#each items as item}
			<Box
				transition
				handleClick={() => {
					showModal = true;
					edit = item;
				}}
			>
				<div class="box-items">
					<svelte:component this={propertyIcon[SKILLS[item.key].type]} width={24} height={24} />
					<Text size="normal">{SKILLS[item.key].languages[$language]}</Text>
					<Dices
						{...getSkillDice({
							properties: basic_properties,
							skill: { ...SKILLS[item.key], value: item.value }
						})}
					/>
				</div>
			</Box>
		{/each}
	</Content>
</CategoryPage>

<style>
	.box-items {
		display: grid;
		grid-template-columns: 24px 2fr 1fr;
		gap: var(--spacing-10);
	}
</style>
