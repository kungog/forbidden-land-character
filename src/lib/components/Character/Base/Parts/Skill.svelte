<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Dices from '$lib/components/Dices.svelte';
	import Text from '$lib/components/Text.svelte';
	import { getSkillDice } from '$lib/helpers/getDices';

	import getSkillObject from '$lib/helpers/getSkills';

	const { basic_properties }: Character = $page.data.character;
	export let skill: keyof Character['skills'], value: number;

	const skillObject = getSkillObject(skill);
	const label = skillObject.languages[$language];

	const dices = getSkillDice({ properties: basic_properties, skill: skillObject, value });
</script>

<Box handleClick={() => {}}>
	<div class="flex space-b">
		<Text size="normal">{label}</Text>
		<Dices {...dices} />
	</div>
</Box>
