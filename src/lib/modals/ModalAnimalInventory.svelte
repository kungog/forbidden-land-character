<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyInventoryObject } from '$lib/helpers/getCharacterObject';
	import { language, modal, activeAnimal, showConfirm } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const item = isUpdate ? animals[$activeAnimal].inventory[$modal.index] : emptyInventoryObject;
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
	$: objectKey =
		isUpdate && !$showConfirm
			? `animals.${$activeAnimal}.inventory.${$modal.index}`
			: `animals.${$activeAnimal}.inventory`;
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={item.name} iFor="name" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="text" iLabel={LABEL.bonus} iValue={item.bonus} iFor="bonus" />
		<Input iType="number" iLabel={LABEL.weight} iValue={item.weight} iFor="weight" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.additionals} iValue={item.additionals} iFor="additionals" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
