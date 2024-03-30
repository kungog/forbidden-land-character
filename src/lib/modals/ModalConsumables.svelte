<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';

	const { consumables }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody>
	<FormAttributes objectKey="consumables" />
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.arrows} iValue={consumables.arrows} iFor="arrows" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.food} iValue={consumables.food} iFor="food" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.torches} iValue={consumables.torches} iFor="torches" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.water} iValue={consumables.water} iFor="water" />
	</GridTemplate>
</ModalBody>
<ModalFooter remove={false} />
