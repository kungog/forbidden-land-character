<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Dices from '$lib/components/Dices.svelte';
	import { getSkillDice } from '$lib/helpers/getDices';

	import getSkillObject from '$lib/helpers/getSkills';

	const { basic_properties }: Character = $page.data.character;
	export let skill: keyof Character['skills'], value: number;

	const skillObject = getSkillObject(skill);
	const label = skillObject.languages['sv'];

	const dices = getSkillDice({ properties: basic_properties, skill: skillObject, value });

	console.log(dices);
</script>

<div>
	<Box handleClick={() => {}}>
		<div>
			<span>{label}</span>
			<Dices {...dices} />
		</div>
	</Box>
</div>

<style lang="scss">
	div:not(:last-child) {
		margin-bottom: var(--spacing-10);
	}
	span {
		color: white;
	}
</style>
