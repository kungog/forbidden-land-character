<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import Property from './Parts/Property.svelte';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { capitalize } from '$helpers/utilites';
	import Text from '$components/Text.svelte';
	const { basic_properties }: Character = $page.data.character;
	let showModal = false;
	$: edit = basic_properties;

	const LABEL = GENERAL_LABELS[$language];
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		{#each basic_properties as property}
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
	</Modal>
{/if}

<Box className="properties" size="medium" handleClick={() => (showModal = true)}>
	<div class="flex space-b align-c">
		{#each basic_properties as property}
			<Property type={property.id} amount={property.value} failure={property.failure} />
		{/each}
	</div>
</Box>
