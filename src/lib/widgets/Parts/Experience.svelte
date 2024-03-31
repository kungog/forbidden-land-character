<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$components/Text.svelte';
	const { experience }: Character = $page.data.character;
	const kpString = `${experience}/25`;
</script>

<div>
	<Text>EP</Text>
	<Text>{kpString}</Text>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 35px 1fr;
		grid-template-rows: 1fr;
	}
</style>
