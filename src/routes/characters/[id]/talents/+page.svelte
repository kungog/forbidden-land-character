<script lang="ts">
	import type { PageData } from './$types';
	import { showModal, language, modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS } from '$lib/helpers/constants/languages';

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

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].talents}</h1>
</div>

<section class="flex column">
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
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}
</style>
