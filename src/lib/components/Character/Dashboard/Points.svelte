<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '../../Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	const { experience, power_points: powerPoints }: Character = $page.data.character;

	const handlePointsModal = () => {
		$modal = {
			type: '',
			id: 'points'
		};
	};
</script>

<Box className="points flex space-b align-c" size="small" handleClick={() => handlePointsModal()}>
	<Experience {experience} />
	<PowerPoint {powerPoints} />
</Box>
