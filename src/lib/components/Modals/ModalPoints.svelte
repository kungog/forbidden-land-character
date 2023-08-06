<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { experience, power_points: powerPoints }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
</script>

<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABELS.experience} iValue={experience} iFor="experience" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABELS.power_points} iValue={powerPoints} iFor="power_points" />
</GridTemplate>
