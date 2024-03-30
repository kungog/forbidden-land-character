<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Textarea from '$components/Textarea.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';

	const { relations }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const relation = relations[$modal?.index];
</script>

<ModalBody>
	<Textarea iLabel={LABEL.relation} iValue={relation} iFor="relation" />
</ModalBody>
<ModalFooter />
