<script lang="ts">
	import type { PageData } from './$types';
	import { showModal, language, modal } from '$lib/store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS } from '$helpers/constants/languages';
	import Content from '$components/Content.svelte';
	import CategoryPage from '$components/CategoryPage.svelte';

	export let data: PageData;
	const { talents }: Character = data.character;
	const dbTalents: Talent[] = data.talents;

	const handleTalentModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
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

<CategoryPage>
	<h1>{BASE_LABELS[$language].talents}</h1>
	<Content>
		{#if mergedTalents.length > 0}
			{#each mergedTalents as talent, index}
				<Box handleClick={() => handleTalentModal(index)}>
					<div class="flex space-b">
						<Text size="normal">{talent.name}</Text>
						{talent.value}
					</div>
				</Box>
			{/each}
		{:else}
			<Text>{NO_TALENTS[$language]}</Text>
		{/if}
	</Content>
</CategoryPage>
