<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Textarea from '$lib/components/Textarea.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { relations }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const isUpdate = !typeCheckPost($modal);
	const relation = isUpdate ? relations[$modal?.index] : '';
	const id = isUpdate ? 'update' : 'create';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="relations" />
	<Textarea iLabel={LABEL.relation} iValue={relation} iFor="" />
</ModalBody>
<ModalFooter action={id} />
