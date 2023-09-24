<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyWeaponObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { weapons }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];

	const isUpdate = !typeCheckPost($modal);
	const weapon = isUpdate ? weapons[$modal.index] : emptyWeaponObject;
	const id = isUpdate ? 'update' : 'create';
	const objectKey = isUpdate ? `${$modal.key}.${$modal.index}` : 'weapons';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.weapons} iValue={weapon.type} iFor="type" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="text" iLabel={LABEL.bonus} iValue={weapon.bonus} iFor="bonus" />
		<Input iType="number" iLabel={LABEL.damage} iValue={weapon.damage} iFor="damage" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.range} iValue={weapon.range} iFor="range" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.additionals} iValue={weapon.additionals} iFor="additionals" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
