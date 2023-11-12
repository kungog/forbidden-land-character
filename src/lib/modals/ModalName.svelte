<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const character: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="base" />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={character.name} iFor="name" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
