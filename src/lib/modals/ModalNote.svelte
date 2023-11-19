<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal, showConfirm } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Textarea from '$lib/components/Textarea.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';

	const { notes }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const note = isUpdate ? notes[$modal.index] : '';
	let objectKey = 'notes';
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<Textarea iLabel={LABEL.note} iValue={note} iFor="note" />
</ModalBody>
<ModalFooter action={id} />
