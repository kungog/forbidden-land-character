<script lang="ts">
	import Box from '../../Box.svelte';
	import Experience from './Parts/Experience.svelte';
	import PowerPoint from './Parts/PowerPoint.svelte';
	export let experience: Character['experience'], powerPoints: Character['power_points'];
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
