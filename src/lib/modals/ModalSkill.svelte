<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$store';
	import Text from '$components/Text.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import ModalBody from '$components/ModalBody.svelte';

	const { skills }: Character = $page.data.character;

	const key = $modal?.objectKey ?? 'animal_handling';
	const skill = skills[key];
</script>

<ModalBody>
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={skill} iFor={key} />
</ModalBody>
<ModalFooter remove={false} />
