<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import Modal from '$components/Modal.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	const { description }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	$: edit = description;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr 1fr" gap={48}>
			<Input iType="number" iLabel={LABEL.age} iValue={edit.age} iFor="age" />
			<Input iType="number" iLabel={LABEL.reputation} iValue={edit.reputation} iFor="reputation" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.face} iValue={edit.face} iFor="face" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.body} iValue={edit.body} iFor="body" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.cloths} iValue={edit.cloths} iFor="cloths" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.dark_secret} iValue={edit.dark_secret} iFor="dark_secret" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.pride} iValue={edit.pride} iFor="pride" />
		</GridTemplate>
	</Modal>
{/if}

<div>
	<Box size="small" className="face" handleClick={() => (showModal = true)}>
		<Text>{LABEL.face}: {description.face}</Text>
	</Box>
	<Box size="small" className="body" handleClick={() => (showModal = true)}>
		<Text>{LABEL.body}: {description.body}</Text>
	</Box>
	<Box size="small" className="cloths" handleClick={() => (showModal = true)}>
		<Text>{LABEL.cloths}: {description.cloths}</Text>
	</Box>
	<Box size="small" className="secret" handleClick={() => (showModal = true)}>
		<Text>{LABEL.dark_secret}</Text>
		<Text>{description.dark_secret}</Text>
	</Box>
	<Box size="small" className="misc flex column space-b" handleClick={() => (showModal = true)}>
		<span class="flex space-b">
			<Text selfCenter={false}>{LABEL.reputation}:</Text>
			<Text selfCenter={false}>{description.reputation}</Text>
		</span>
		<span class="flex space-b">
			<Text selfCenter={false}>{LABEL.age}:</Text>
			<Text selfCenter={false}>{description.age}</Text>
		</span>
		<Text selfCenter={false}>{LABEL.pride}: {description.pride}</Text>
	</Box>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas:
			'face face misc'
			'body body misc'
			'cloths cloths misc'
			'secret secret secret';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
		min-height: 200px;
	}

	span {
		width: 100%;
	}
</style>
