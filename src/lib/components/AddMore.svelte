<script lang="ts">
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
</script>

<div>
	<Box size="small" handleClick={() => console.log('2')}>
		<Text size="large">+</Text>
	</Box>
</div>

<style>
	div {
		width: fit-content;
	}
</style>
