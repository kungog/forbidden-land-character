<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { capitalize } from '$lib/helpers/utilites';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import Text from '$lib/components/Text.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';

	const { basic_properties: properties }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="basic_properties" />
	{#each properties as property}
		<Text>{capitalize(LABEL[property.id])}</Text>
		<GridTemplate template="1fr 1fr">
			<Input iType="number" iLabel="" iValue={property.value} iFor="{property.id}_value" />
			<Input
				warning
				iType="number"
				iLabel=""
				iValue={property.failure}
				iFor="{property.id}_failure"
			/>
		</GridTemplate>
	{/each}
</ModalBody>
<ModalFooter action={id} />
