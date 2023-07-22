<script lang="ts">
	import Text from '../Text.svelte';
	export let powerPoints: Character['power_points'];

	const kpString = `${powerPoints}/10`;
</script>

<div>
	<Text>KP</Text>
	<Text>{kpString}</Text>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 35px 1fr;
		grid-template-rows: 1fr;
	}
</style>
