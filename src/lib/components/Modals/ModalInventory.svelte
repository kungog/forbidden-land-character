<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyInventoryObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '../Input.svelte';
	import GridTemplate from './GridTemplate.svelte';

	const { inventory }: Character = $page.data.character;
	const LABELS = GENERAL_LABELS[$language];
	const item = typeof $modal?.type === 'number' ? inventory[$modal.type] : emptyInventoryObject;
</script>

<GridTemplate template="1fr">
	<Input iType="text" iLabel={LABELS.name} iValue={item.name} iFor="inventory_name" />
</GridTemplate>
<GridTemplate template="1fr 1fr" gap={48}>
	<Input iType="text" iLabel={LABELS.bonus} iValue={item.bonus} iFor="inventory_bonus" />
	<Input iType="number" iLabel={LABELS.weight} iValue={item.weight} iFor="inventory_weight" />
</GridTemplate>
<GridTemplate template="1fr">
	<Input
		iType="text"
		iLabel={LABELS.additionals}
		iValue={item.additionals}
		iFor="inventory_additionals"
	/>
</GridTemplate>
