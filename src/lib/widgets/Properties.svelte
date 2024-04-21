<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language, showToaster } from '$store';
	import Box from '$components/Box.svelte';
	import Property from './Parts/Property.svelte';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { BASE_URL, capitalize, objectValueToNumber } from '$helpers/utilites';
	import Text from '$components/Text.svelte';
	import { invalidate } from '$app/navigation';
	const { basic_properties }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	let edit = basic_properties;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		const converted = edit.map((item) => objectValueToNumber(item, ['id']));
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + $page.data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...$page.data.character, basic_properties: converted })
		});

		showModal = false;
		invalidate('viewed:character');

		$showToaster = {
			type: 'success',
			text: 'Updated: Character properties',
			timeout: 3500
		};
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		{#each basic_properties as property, index}
			<Text>{capitalize(LABEL[property.id])}</Text>
			<GridTemplate template="1fr 1fr">
				<Input
					iType="number"
					iLabel=""
					bind:iValue={edit[index].value}
					iFor="{property.id}_value"
				/>
				<Input
					warning
					iType="number"
					iLabel=""
					bind:iValue={edit[index].failure}
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
