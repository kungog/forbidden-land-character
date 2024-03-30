<script lang="ts">
	import type { PageData } from './$types';
	import { language, modal, showModal } from '$store';
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
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import Experience from '$widgets/Parts/Experience.svelte';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ experience, skills, basic_properties } = data.character);

	const items = createArrayFromObject(skills ?? {});
	const propertyIcon = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};
</script>

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].experience}</h1>
		<Experience {experience} />
	</div>
	<Content active>
		{#each items as item, index}
			<Box
				transition
				handleClick={() => {
					$showModal = true;
					$modal = {
						type: 'skills',
						index
					};
				}}
			>
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
