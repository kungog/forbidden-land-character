<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { emptyAnimalObject } from '$helpers/getCharacterObject';
	import { language, modal, showConfirm } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$helpers/utilites';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const animal = isUpdate ? animals[$modal.index] : emptyAnimalObject;
	$: objectKey = isUpdate && !$showConfirm ? `${$modal.key}.${$modal.index}` : 'animals';
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={animal.name} iFor="name" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="text" iLabel={LABEL.flexibility} iValue={animal.flexibility} iFor="flexibility" />
		<Input iType="number" iLabel={LABEL.strength} iValue={animal.strength} iFor="strength" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
