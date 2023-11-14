<script lang="ts">
	import { page } from '$app/stores';
	import { showModal, modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';

	const { talents }: Character = $page.data.character;
	const dbTalents: Talent[] = $page.data.talents;

	const handleTalentModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'talents',
			index: index,
			value: talents[index]
		};
	};

	const mergedTalents = talents.map((talent) => {
		const match = dbTalents.find((item) => item._id === talent._id);
		return match ? { ...talent, ...match } : talent;
	}) as (CharacterTalent & Talent)[];
</script>

{#each mergedTalents as talent, index}
	<Box handleClick={() => handleTalentModal(index)}>
		<div class="flex space-b">
			<Text size="normal">{talent.name}</Text>
			{talent.value}
		</div>
	</Box>
{/each}
