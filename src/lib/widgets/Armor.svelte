<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Box from '$components/Box.svelte';
	import Equipment from '$components/Equipment.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import { BASE_URL } from '$helpers/utilites';
	import { invalidate } from '$app/navigation';
	const LABEL = GENERAL_LABELS[$language];
	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;
	let showModal = false;
	let edit = { head, body, shield };

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + $page.data.character._id, {
			method: 'POST',
			body: JSON.stringify({ ...$page.data.character, armor: edit })
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.helm} bind:iValue={edit.head.name} iFor="head_name" />
			<Input
				iType="number"
				iLabel={LABEL.protection}
				bind:iValue={edit.head.value}
				iFor="head_value"
			/>
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.armor} bind:iValue={edit.body.name} iFor="body_name" />
			<Input
				iType="number"
				iLabel={LABEL.protection}
				bind:iValue={edit.body.value}
				iFor="body_value"
			/>
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.shield} bind:iValue={edit.shield.name} iFor="shield_name" />
			<Input
				iType="number"
				iLabel={LABEL.bonus}
				bind:iValue={edit.shield.value}
				iFor="shield_value"
			/>
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
