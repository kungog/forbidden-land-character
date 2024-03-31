<script lang="ts">
	import type { PageData } from './$types';
	import { showModal, language, modal } from '$store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_TALENTS, BASE_LABELS } from '$helpers/constants/languages';
	import Content from '$layouts/Content.svelte';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import PowerPoint from '$widgets/Parts/PowerPoint.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ talents } = data.character);
	const dbTalents = data.talents;
	const mergedTalents =
		talents?.map((talent) => {
			const match = dbTalents.find((item) => item._id === talent._id);
			return match ? { ...talent, ...match } : talent;
		}) ?? ([] as (CharacterTalent & Talent)[]);
</script>

<CategoryPage>
	<div class="flex space-b">
		<h1>{BASE_LABELS[$language].talents}</h1>
		<PowerPoint />
	</div>
	<Content active>
		{#if mergedTalents.length > 0}
			{#each mergedTalents as talent, index}
				<Box
					transition
					handleClick={() => {
						$showModal = true;
						$modal = {
							type: 'talents',
							index
						};
					}}
				>
					<div class="flex space-b">
						<Text size="normal">{talent.name}</Text>
						{talent.value}
					</div>
				</Box>
			{/each}

			<AddMore handleClick={() => addNewItem(data.character, 'talent')} />
		{:else}
			<Text>{NO_TALENTS[$language]}</Text>
		{/if}
	</Content>
</CategoryPage>
