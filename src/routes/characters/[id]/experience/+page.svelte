<script lang="ts">
	import type { PageData } from './$types';
	import { language, modal, showModal } from '$lib/store';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import { SKILLS } from '$lib/helpers/constants/skills';
	import { getSkillDice } from '$lib/helpers/getDices';
	import { BASE_LABELS } from '$lib/helpers/constants/languages';

	import Box from '$lib/components/Box.svelte';
	import Dices from '$lib/components/Dices.svelte';
	import Text from '$lib/components/Text.svelte';
	import CharismaIcon from '$lib/components/Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '$lib/components/Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '$lib/components/Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '$lib/components/Icons/Property/StrengthIcon.svelte';

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

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].animals}</h1>
</div>

<section class="flex column">
	{#each items as item}
		<Box handleClick={() => handleModal(item.key, item.value)}>
			<div class="flex space-b">
				<div class="flex align-c">
					<svelte:component this={propertyIcon[SKILLS[item.key].type]} width={16} height={16} />
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
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}

	.align-c :global(:nth-child(1)) {
		margin-right: var(--spacing-10);
	}
</style>
