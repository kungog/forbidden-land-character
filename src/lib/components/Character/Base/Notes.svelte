<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_NOTES } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';

	const { notes }: Character = $page.data.character;
</script>

<div>
	{#if notes.length > 0}
		<Box handleClick={() => {}}>
			{#each notes as note}
				<Text>{note}</Text>
			{/each}
		</Box>
	{:else}
		<Text>{NO_NOTES[$language]}</Text>
	{/if}
</div>

<style lang="scss">
</style>
