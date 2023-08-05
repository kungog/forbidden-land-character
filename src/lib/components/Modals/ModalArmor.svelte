<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
</script>

<GridTemplate>
	<Input iType="text" iLabel={LABELS.helm} iValue={head.name} iFor="helm_name" />
	<Input iType="number" iLabel={LABELS.protection} iValue={head.value} iFor="helm_value" />
</GridTemplate>
<GridTemplate>
	<Input iType="text" iLabel={LABELS.armor} iValue={body.name} iFor="body_name" />
	<Input iType="number" iLabel={LABELS.protection} iValue={body.value} iFor="body_value" />
</GridTemplate>
<GridTemplate>
	<Input iType="text" iLabel={LABELS.shield} iValue={shield.name} iFor="shield_name" />
	<Input iType="number" iLabel={LABELS.bonus} iValue={shield.value} iFor="shield_value" />
</GridTemplate>
