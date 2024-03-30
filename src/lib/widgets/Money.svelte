<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import Coin from './Parts/Coin.svelte';
	const { money }: Character = $page.data.character;
</script>

<Box
	className="money"
	size="small"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'money',
			index: 0
		};
	}}
>
	<div class="flex space-b align-c">
		<Coin type="gold" amount={money.gold} />
		<Coin type="silver" amount={money.silver} />
		<Coin type="copper" amount={money.copper} />
	</div>
</Box>
