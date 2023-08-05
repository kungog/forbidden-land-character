<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Dices from '$lib/components/Dices.svelte';
	import Text from '$lib/components/Text.svelte';
	import { getSkillDice } from '$lib/helpers/getDices';

	import CharismaIcon from '../../Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '../../Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '../../Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '../../Icons/Property/StrengthIcon.svelte';

	import getSkillObject from '$lib/helpers/getSkills';

	const { basic_properties }: Character = $page.data.character;
	export let skill: keyof Character['skills'], value: number;

	const propertyIcon = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};

	const skillObject = getSkillObject(skill);
	const label = skillObject.languages[$language];

	const dices = getSkillDice({ properties: basic_properties, skill: skillObject, value });
</script>

<Box handleClick={() => {}}>
	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={propertyIcon[skillObject.type]} width={16} height={16} />
			<Text size="normal">{label}</Text>
		</div>
		<Dices {...dices} />
	</div>
</Box>

<style lang="scss">
	.align-c :global(:nth-child(1)) {
		margin-right: var(--spacing-10);
	}
</style>
