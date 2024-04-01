<script lang="ts">
	import type { PageData } from './$types';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import { NO_RELATIONS, BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import CategoryPage from '$layouts/CategoryPage.svelte';
	import Content from '$layouts/Content.svelte';
	import AddMore from '$components/AddMore.svelte';
	import { addNewItem } from '$helpers/utilites';
	import Modal from '$components/Modal.svelte';
	import Textarea from '$components/Textarea.svelte';

	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({ relations } = data.character);
	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	$: edit = null as string | null;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<Textarea iLabel={LABEL.relation} iValue={edit} iFor="relation" />
	</Modal>
{/if}

<CategoryPage>
	<h1>{BASE_LABELS[$language].relations}</h1>

	<Content active label={NO_RELATIONS[$language]} empty={relations.length === 0}>
		{#if relations.length > 0}
			{#each relations as relation}
				<Box
					transition
					handleClick={() => {
						showModal = true;
						edit = relation;
					}}
				>
					<Text>{relation}</Text>
				</Box>
			{/each}
		{/if}
		<AddMore handleClick={() => addNewItem(data.character, 'relations')} />
	</Content>
</CategoryPage>
