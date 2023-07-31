<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_RELATIONS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';

	const { relations }: Character = $page.data.character;
</script>

{#if relations.length > 0}
	<Box handleClick={() => {}}>
		{#each relations as relation}
			<Text>{relation}</Text>
		{/each}
	</Box>
{:else}
	<Text>{NO_RELATIONS[$language]}</Text>
{/if}
