<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';

	const { talents }: Character = $page.data.character;
</script>

{#each talents as talent}
	<div>
		<Box handleClick={() => {}}>
			<div class="flex space-b">
				<Text>{talent.id}</Text>
				{talent.value}
			</div>
		</Box>
	</div>
{/each}

<style lang="scss">
	div:not(:last-child) {
		margin-bottom: var(--spacing-10);
	}
</style>
