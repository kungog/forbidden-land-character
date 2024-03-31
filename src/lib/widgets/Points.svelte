<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	const { experience, power_points }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	$: edit = { experience, power_points };
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.experience} iValue={experience} iFor="experience" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.power_points} iValue={power_points} iFor="power_points" />
		</GridTemplate>
	</Modal>
{/if}

<Box className="points flex space-b align-c" size="small" handleClick={() => (showModal = true)}>
	<Experience />
	<PowerPoint />
</Box>
