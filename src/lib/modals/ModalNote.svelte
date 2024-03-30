<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Textarea from '$components/Textarea.svelte';
	import ModalBody from '$components/ModalBody.svelte';

	const { notes }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const note = notes[$modal.index];
</script>

<ModalBody>
	<Textarea iLabel={LABEL.note} iValue={note} iFor="note" />
</ModalBody>
