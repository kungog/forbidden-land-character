<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';

	const { talents }: Character = $page.data.character;
</script>

{#each talents as talent}
	<Box handleClick={() => {}}>
		<div class="flex space-b">
			<Text size="normal">{talent.id}</Text>
			{talent.value}
		</div>
	</Box>
{/each}
