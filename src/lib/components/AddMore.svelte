<script lang="ts">
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	export let handleClick: any;
</script>

<div>
	<Box size="small" {handleClick}>
		<Text size="large">+</Text>
	</Box>
</div>

<style>
	div {
		width: fit-content;
	}
</style>
