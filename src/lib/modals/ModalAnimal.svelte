<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language, modal } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const animal = animals[$modal.index];
</script>

<ModalBody>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={animal.name} iFor="name" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="text" iLabel={LABEL.flexibility} iValue={animal.flexibility} iFor="flexibility" />
		<Input iType="number" iLabel={LABEL.strength} iValue={animal.strength} iFor="strength" />
	</GridTemplate>
</ModalBody>
<ModalFooter />
