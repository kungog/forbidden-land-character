<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showConfirm } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import { emptyTalentObject } from '$lib/helpers/getCharacterObject';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { talents }: Character = $page.data.character;
	const isUpdate = !typeCheckPost($modal);
	const talent = isUpdate ? talents[$modal.index] : emptyTalentObject;
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
	$: objectKey = isUpdate && !$showConfirm ? `${$modal.key}.${$modal.index}` : 'talents';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<Text selfCenter={false} size="normal">FV</Text>
	<input type="hidden" name="_id" value={talent._id} />
	<RadioButton iValue={talent.value} iFor="value" amount={3} />
</ModalBody>
<ModalFooter action={id} />
