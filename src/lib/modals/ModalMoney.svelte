<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';

	const { money }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

<ModalBody>
	<FormAttributes objectKey="money" />
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.gold} iValue={money.gold} iFor="gold" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.silver} iValue={money.silver} iFor="silver" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.copper} iValue={money.copper} iFor="copper" />
	</GridTemplate>
</ModalBody>
<ModalFooter remove={false} />
