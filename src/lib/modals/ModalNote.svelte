<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal, showConfirm } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Textarea from '$components/Textarea.svelte';
	import { typeCheckPost } from '$helpers/utilites';
	import ModalFooter from '$components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalBody from '$components/ModalBody.svelte';

	const { notes }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const note = isUpdate ? notes[$modal.index] : '';
	$: objectKey = isUpdate && !$showConfirm ? `${$modal.key}.${$modal.index}` : 'notes';
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<Textarea iLabel={LABEL.note} iValue={note} iFor="note" />
</ModalBody>
<ModalFooter action={id} />
