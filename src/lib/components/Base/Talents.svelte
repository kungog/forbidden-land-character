<script lang="ts">
	import { page } from '$app/stores';
	import { language, modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';

	const { talents }: Character = $page.data.character;

	const handleTalentModal = (index: number) =>
		($modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'talents',
			index: index,
			value: talents[index]
		});
</script>

{#each talents as talent, index}
	<Box handleClick={() => handleTalentModal(index)}>
		<div class="flex space-b">
			<Text size="normal">{talent.id}</Text>
			{talent.value}
		</div>
	</Box>
{/each}
