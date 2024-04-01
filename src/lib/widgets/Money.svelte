<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import Coin from './Parts/Coin.svelte';
	import { BASE_URL } from '$helpers/utilites';
	import { invalidate } from '$app/navigation';
	const { money }: Character = $page.data.character;

	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	let edit = money;

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
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.gold} bind:iValue={money.gold} iFor="gold" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.silver} bind:iValue={money.silver} iFor="silver" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.copper} bind:iValue={money.copper} iFor="copper" />
		</GridTemplate>
	</Modal>
{/if}

<Box
	className="money"
	size="small"
	handleClick={() => {
		showModal = true;
	}}
>
	<div class="flex space-b align-c">
		<Coin type="gold" amount={money.gold} />
		<Coin type="silver" amount={money.silver} />
		<Coin type="copper" amount={money.copper} />
	</div>
</Box>
