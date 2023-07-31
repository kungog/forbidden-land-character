<script lang="ts">
	import { page } from '$app/stores';
	import Box from '../../Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	const { experience, power_points: powerPoints }: Character = $page.data.character;
</script>

<Box className="points flex space-b align-c" size="small" handleClick={() => {}}>
	<Experience {experience} />
	<PowerPoint {powerPoints} />
</Box>
