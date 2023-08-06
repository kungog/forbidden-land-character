<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import BooleanRadio from '../BooleanRadio.svelte';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABELS.critical} iValue={critical} iFor="critical_injuries" />
</GridTemplate>
<GridTemplate template="1fr 1fr">
	<BooleanRadio iLabel={LABELS.cooled} iValue={condition.cooled} iFor="condition_cooled" />
	<BooleanRadio iLabel={LABELS.dry} iValue={condition.dry} iFor="condition_dry" />
</GridTemplate>
<GridTemplate template="1fr 1fr">
	<BooleanRadio iLabel={LABELS.sleepless} iValue={condition.sleepless} iFor="condition_sleepless" />
	<BooleanRadio iLabel={LABELS.starved} iValue={condition.starved} iFor="condition_starved" />
</GridTemplate>
