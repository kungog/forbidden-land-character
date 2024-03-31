<script lang="ts">
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
</script>

<Box
	className="points flex space-b align-c"
	size="small"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'power_points',
			index: 0
		};
	}}
>
	<Experience />
	<PowerPoint />
</Box>
