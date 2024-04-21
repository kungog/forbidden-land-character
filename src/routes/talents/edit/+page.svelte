<script lang="ts">
	import { page } from '$app/stores';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import { ADD_NEW_TALENT, BASE_LABELS } from '$helpers/constants/languages';
	import { language } from '$lib/store';
	import Text from '$components/Text.svelte';
	import { capitalize } from '$helpers/utilites';
	import Divider from '$components/Divider.svelte';
	import Box from '$components/Box.svelte';
	import Overlay from '$components/Overlay.svelte';

	const dbTalents: Talent[] = $page.data.talents;
	const LABEL = ADD_NEW_TALENT[$language];
	const BASE = BASE_LABELS[$language];
	let search = '';
	let showModal = false;
	let talent: null | Talent = null;

	$: filteredTalents = dbTalents
		.filter((talent) => talent.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => ('' + a.name).localeCompare(b.name));

	const handleClick = (item: Talent) => {
		talent = item;
		showModal = true;
	};
</script>

<div class="main-page">
	<Text size="large" bold>{capitalize(LABEL.search)}</Text>
	<Divider />
	<GridTemplate template="1fr">
		<Input bind:iValue={search} iType="text" iFor="search" iLabel={LABEL.search_talents} />
	</GridTemplate>
	<Text size="large">{BASE.talents}</Text>
	<div class="flex column">
		{#each filteredTalents as talent}
			<Box handleClick={() => handleClick(talent)}>
				<Text size="medium">{talent.name}</Text>
			</Box>
		{/each}
	</div>
</div>

{#if showModal}
	<Overlay handleClick={() => ((showModal = false), (talent = null))} />
	<dialog>
		<section>
			<form id="create" method="POST">
				<Text size="medium">{capitalize(LABEL.add_new)}</Text>
				<Divider />
				<GridTemplate template="1fr">
					<Input iType="text" iLabel={LABEL.title} iValue={talent?._id} iFor="id" />
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input iType="text" iLabel={LABEL.title} iValue={talent?.name} iFor="name" />
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input
						iType="textarea"
						iLabel={LABEL.description}
						iValue={talent?.description}
						iFor="description"
					/>
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input iType="textarea" iLabel={LABEL.one} iValue={talent?.stages.one ?? ''} iFor="one" />
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input iType="textarea" iLabel={LABEL.two} iValue={talent?.stages.two ?? ''} iFor="two" />
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input
						iType="textarea"
						iLabel={LABEL.three}
						iValue={talent?.stages.three ?? ''}
						iFor="three"
					/>
				</GridTemplate>
				<GridTemplate template="1fr">
					<Input iType="text" iLabel={LABEL.comment} iValue={talent?.comment} iFor="comment" />
				</GridTemplate>
				<button type="submit">Save</button>
			</form>
		</section>
	</dialog>
{/if}

<style lang="scss">
	.main-page {
		padding: var(--spacing-48) var(--spacing-24);
		height: 100%;
	}

	.flex {
		margin-top: var(--spacing-20);
		gap: var(--spacing-12);
		overflow: auto;
		height: calc(80% - (var(--spacing-48) * 2));
		padding: var(--spacing-12) var(--spacing-10);
		outline: 1px solid var(--color-box);
		border-radius: 4px;
	}

	dialog {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: 0;
		pointer-events: none;
		padding: 0;
		top: 0;
	}

	section {
		top: 0;
		position: relative;
		z-index: 101;
		min-height: 10%;
		width: 90%;
		background: var(--color-background);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
		pointer-events: initial;
	}
</style>
