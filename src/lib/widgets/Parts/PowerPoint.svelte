<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$components/Text.svelte';
	const { power_points }: Character = $page.data.character;

	const kpString = `${power_points}/10`;
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
