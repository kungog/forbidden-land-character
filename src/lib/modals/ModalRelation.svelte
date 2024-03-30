<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal, showConfirm } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Textarea from '$components/Textarea.svelte';
	import { typeCheckPost } from '$helpers/utilites';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { relations }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const relation = isUpdate ? relations[$modal?.index] : '';
	$: objectKey = isUpdate && !$showConfirm ? `${$modal.key}.${$modal.index}` : 'relations';
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<Textarea iLabel={LABEL.relation} iValue={relation} iFor="relation" />
</ModalBody>
<ModalFooter action={id} />
