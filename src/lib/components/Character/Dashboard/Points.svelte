<script lang="ts">
	import { page } from '$app/stores';
	import Box from '../../Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	const { experience, power_points: powerPoints }: Character = $page.data.character;
</script>

<div>
	<Box className="flex space-b" size="small" handleClick={() => {}}>
		<Experience {experience} />
		<PowerPoint {powerPoints} />
	</Box>
</div>

<style lang="scss">
	div:has(button) {
		grid-area: points;
		width: 100%;
	}
</style>
