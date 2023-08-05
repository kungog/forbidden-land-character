<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyWeaponObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { weapons }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
	const weapon = typeof $modal?.type === 'number' ? weapons[$modal.type] : emptyWeaponObject;
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABELS.weapon} iValue={weapon.type} iFor="weapon_type" />
</GridTemplate>
<GridTemplate template="1fr 1fr" gap={48}>
	<Input iType="text" iLabel={LABELS.bonus} iValue={weapon.bonus} iFor="weapon_bonus" />
	<Input iType="number" iLabel={LABELS.damage} iValue={weapon.damage} iFor="weapon_damage" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABELS.range} iValue={weapon.range} iFor="weapon_range" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input
		iType="text"
		iLabel={LABELS.additionals}
		iValue={weapon.additionals}
		iFor="weapon_additionals"
	/>
</GridTemplate>
