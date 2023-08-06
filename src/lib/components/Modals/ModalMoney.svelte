<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { money }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
</script>

<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABELS.gold} iValue={money.gold} iFor="money_gold" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABELS.silver} iValue={money.silver} iFor="money_silver" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="number" iLabel={LABELS.copper} iValue={money.copper} iFor="money_copper" />
</GridTemplate>
