<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$store';
	import Text from '$components/Text.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { skills }: Character = $page.data.character;

	const key = $modal?.objectKey ?? 'animal_handling';
	const skill = skills[key];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="skills" />
	{#each Object.entries(skills) as [key, value]}
		<input type="hidden" name={key} {value} />
	{/each}
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={skill} iFor={key} />
</ModalBody>
<ModalFooter action={id} />
