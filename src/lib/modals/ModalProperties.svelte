<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { capitalize } from '$helpers/utilites';
	import { language } from '$store';
	import Input from '$components/Input.svelte';
	import Text from '$components/Text.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import ModalBody from '$components/ModalBody.svelte';

	const { basic_properties: properties }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

<ModalBody>
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
<ModalFooter remove={false} />
