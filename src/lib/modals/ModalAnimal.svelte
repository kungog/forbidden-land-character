<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { emptyAnimalObject } from '$lib/helpers/getCharacterObject';
	import { language, modal } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const animal = isUpdate ? animals[$modal.index] : emptyAnimalObject;
	const id = isUpdate ? 'update' : 'create';
	const objectKey = isUpdate ? `${$modal.key}.${$modal.index}` : 'animals';
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
