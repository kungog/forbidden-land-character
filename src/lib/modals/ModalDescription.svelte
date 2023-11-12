<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { description }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="description" />
	<GridTemplate template="1fr 1fr" gap={48}>
		<Input iType="number" iLabel={LABEL.age} iValue={description.age} iFor="age" />
		<Input
			iType="number"
			iLabel={LABEL.reputation}
			iValue={description.reputation}
			iFor="reputation"
		/>
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.face} iValue={description.face} iFor="face" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.body} iValue={description.body} iFor="body" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.cloths} iValue={description.cloths} iFor="cloths" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input
			iType="text"
			iLabel={LABEL.dark_secret}
			iValue={description.dark_secret}
			iFor="dark_secret"
		/>
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.pride} iValue={description.pride} iFor="pride" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
