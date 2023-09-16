<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	export let gridLayout = false;
	const { experience, power_points: powerPoints }: Character = $page.data.character;

	const handlePointsModal = () => {
		$modal = {
			type: '',
			id: 'points'
		};
	};

	const layout = gridLayout ? 'grid' : 'flex space-b';
</script>

<Box className="points {layout} align-c" size="small" handleClick={() => handlePointsModal()}>
	<Experience {experience} />
	<PowerPoint {powerPoints} />
</Box>
