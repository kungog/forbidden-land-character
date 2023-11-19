<script lang="ts">
	import { page } from '$app/stores';
	import GridTemplate from '$lib/modals/GridTemplate.svelte';
	import Input from '$lib/components/Input.svelte';
	import { ADD_NEW_TALENT, BASE_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import { capitalize } from '$lib/helpers/utilites';
	import Divider from '$lib/components/Divider.svelte';
	import Box from '$lib/components/Box.svelte';

	const dbTalents: Talent[] = $page.data.talents;
	const LABEL = ADD_NEW_TALENT[$language];
	const BASE = BASE_LABELS[$language];
	let search = '';

	$: filteredTalents = dbTalents
		.filter((talent) => talent.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => ('' + a.name).localeCompare(b.name));
</script>

<section>
	<Text size="large" bold>{capitalize(LABEL.search)}</Text>
	<Divider />
	<GridTemplate template="1fr">
		<Input bind:iValue={search} iType="text" iFor="search" iLabel={LABEL.search_talents} />
	</GridTemplate>
	<Text size="large">{BASE.talents}</Text>
	<div class="flex column">
		{#each filteredTalents as talent}
			<Box handleClick={() => console.log(talent._id)} inverted>
				<Text size="medium">{talent.name}</Text>
			</Box>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		padding: var(--spacing-48) var(--spacing-24);
		height: 100%;
	}

	div {
		margin-top: var(--spacing-20);
		gap: var(--spacing-12);
		overflow: auto;
		height: 75%;
		padding: var(--spacing-12) var(--spacing-10);
		outline: 1px solid var(--color-background);
		border-radius: 4px;
	}
</style>
