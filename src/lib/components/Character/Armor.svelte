<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Box from '$components/Box.svelte';
	import Equipment from '$components/Equipment.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;
	let showModal = false;
	$: edit = { head, body, shield };
	const LABEL = GENERAL_LABELS[$language];
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.helm} iValue={edit.head.name} iFor="head_name" />
			<Input iType="number" iLabel={LABEL.protection} iValue={edit.head.value} iFor="head_value" />
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.armor} iValue={edit.body.name} iFor="body_name" />
			<Input iType="number" iLabel={LABEL.protection} iValue={edit.body.value} iFor="body_value" />
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.shield} iValue={edit.shield.name} iFor="shield_name" />
			<Input iType="number" iLabel={LABEL.bonus} iValue={edit.shield.value} iFor="shield_value" />
		</GridTemplate>
	</Modal>
{/if}

<div>
	<Box className="head" handleClick={() => (showModal = true)} size="small">
		<Equipment {...head} icon="head" />
	</Box>

	<Box className="body" handleClick={() => (showModal = true)} size="small">
		<Equipment {...body} icon="body" />
	</Box>

	<Box className="shield" handleClick={() => (showModal = true)} size="small">
		<Equipment {...shield} icon="shield" />
	</Box>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(1, 1fr);
		grid-template-areas:
			'head'
			'body'
			'shield';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
		min-height: 200px;
	}
</style>
