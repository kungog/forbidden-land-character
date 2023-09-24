<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';

	const { experience, power_points: powerPoints }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="base" />
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.experience} iValue={experience} iFor="experience" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="number" iLabel={LABEL.power_points} iValue={powerPoints} iFor="power_points" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
