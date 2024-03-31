<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import Coin from './Parts/Coin.svelte';
	const { money }: Character = $page.data.character;

	const LABEL = GENERAL_LABELS[$language];
	$: edit = money as Character['money'];
	let showModal = false;
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.gold} iValue={money.gold} iFor="gold" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.silver} iValue={money.silver} iFor="silver" />
		</GridTemplate>
		<GridTemplate template="1fr">
			<Input iType="number" iLabel={LABEL.copper} iValue={money.copper} iFor="copper" />
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
