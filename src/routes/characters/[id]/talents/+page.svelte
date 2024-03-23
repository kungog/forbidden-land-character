<script lang="ts">
	import type { PageData } from './$types';
	import { showModal, language, modal } from '$lib/store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS } from '$helpers/constants/languages';

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

<section class="main-page">
	<h1>{BASE_LABELS[$language].talents}</h1>

	<div class="content flex column">
		{#if mergedTalents.length > 0}
			{#each mergedTalents as talent, index}
				<Box handleClick={() => handleTalentModal(index)} background="var(--color-talents-dark)">
					<div class="flex space-b">
						<Text size="normal">{talent.name}</Text>
						{talent.value}
					</div>
				</Box>
			{/each}
		{:else}
			<Text>{NO_TALENTS[$language]}</Text>
		{/if}
	</div>
</section>

<style lang="scss">
	.main-page {
		padding: var(--spacing-16) var(--spacing-20) 0;
		height: 100%;
		background: var(--color-talents);
		border-radius: 4px;
	}

	.content {
		height: calc(100% - 34px - var(--spacing-24) - var(--spacing-20));
		margin-top: var(--spacing-20);
		gap: var(--spacing-12);
		overflow: auto;
		padding: var(--spacing-12) var(--spacing-10);
		outline: 1px solid var(--color-talents-dark);
		border-radius: 4px;
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}
</style>
