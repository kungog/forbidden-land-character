<script lang="ts">
	import type { PageData } from './$types';
	import { language, modal, showModal } from '$lib/store';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import { SKILLS } from '$helpers/constants/skills';
	import { getSkillDice } from '$helpers/getDices';
	import { BASE_LABELS } from '$helpers/constants/languages';

	import Box from '$components/Box.svelte';
	import Dices from '$components/Dices.svelte';
	import Text from '$components/Text.svelte';
	import CharismaIcon from '$icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '$icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '$icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '$icons/Property/StrengthIcon.svelte';
	import CategoryPage from '$components/CategoryPage.svelte';
	import Content from '$components/Content.svelte';

	export let data: PageData;
	const { skills, basic_properties }: Character = data.character;

	const items = createArrayFromObject(skills);

	const propertyIcon = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};

	const handleModal = (skill: keyof Character['skills'], value: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'skills',
			objectKey: skill,
			value: value,
			index: 0
		};
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].experience}</h1>
	<Content>
		{#each items as item}
			<Box handleClick={() => handleModal(item.key, item.value)}>
				<div class="flex space-b">
					<div class="flex align-c">
						<svelte:component this={propertyIcon[SKILLS[item.key].type]} width={24} height={24} />
						<Text size="normal">{SKILLS[item.key].languages[$language]}</Text>
					</div>
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

<style lang="scss">
	.align-c :global(:nth-child(1)) {
		margin-right: var(--spacing-10);
	}
</style>
