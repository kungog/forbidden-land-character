<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import BooleanRadio from '$lib/components/BooleanRadio.svelte';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="condition" />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.critical} iValue={critical} iFor="critical_injuries" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr">
		<BooleanRadio iLabel={LABEL.cooled} iValue={condition.cooled} iFor="cooled" />
		<BooleanRadio iLabel={LABEL.dry} iValue={condition.dry} iFor="dry" />
	</GridTemplate>
	<GridTemplate template="1fr 1fr">
		<BooleanRadio iLabel={LABEL.sleepless} iValue={condition.sleepless} iFor="sleepless" />
		<BooleanRadio iLabel={LABEL.starved} iValue={condition.starved} iFor="starved" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} remove={false} />
