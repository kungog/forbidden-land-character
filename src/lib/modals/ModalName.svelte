<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Input from '$components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import ModalBody from '$components/ModalBody.svelte';

	const character: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

<ModalBody>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.name} iValue={character.name} iFor="name" />
	</GridTemplate>
</ModalBody>
<ModalFooter remove={false} />
