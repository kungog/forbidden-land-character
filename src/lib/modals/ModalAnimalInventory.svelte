<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language, modal, activeAnimal } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';

	const { animals }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const item = animals[$activeAnimal].inventory[$modal.index];
</script>

<ModalBody>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={item.name} iFor="name" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="text" iLabel={LABEL.bonus} iValue={item.bonus} iFor="bonus" />
		<Input iType="number" iLabel={LABEL.weight} iValue={item.weight} iFor="weight" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.additionals} iValue={item.additionals} iFor="additionals" />
	</GridTemplate>
</ModalBody>
<ModalFooter />
