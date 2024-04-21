<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language, showToaster } from '$store';
	import Box from '$components/Box.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	import { BASE_URL, objectValueToNumber } from '$helpers/utilites';
	import { invalidate } from '$app/navigation';
	const { experience, power_points }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	let edit = { experience, power_points };

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		const converted = objectValueToNumber(edit);
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + $page.data.character._id, {
			method: 'POST',
			body: JSON.stringify({
				...$page.data.character,
				experience: converted.experience,
				power_points: converted.power_points
			})
		});

		showModal = false;
		invalidate('viewed:character');

		$showToaster = {
			type: 'success',
			text: 'Updated: Character points',
			timeout: 3500
		};
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		<GridTemplate template="1fr">
			<Input
				iType="number"
				iLabel={LABEL.experience}
				bind:iValue={edit.experience}
				iFor="experience"
			/>
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input
				iType="number"
				iLabel={LABEL.power_points}
				bind:iValue={edit.power_points}
				iFor="power_points"
			/>
		</GridTemplate>
	</Modal>
{/if}

<Box className="points flex space-b align-c" size="small" handleClick={() => (showModal = true)}>
	<Experience />
	<PowerPoint />
</Box>
