<script lang="ts">
	import { page } from '$app/stores';
	import Box from '../../Box.svelte';
	import Coin from './Parts/Coin.svelte';
	const { money }: Character = $page.data.character;
</script>

<Box className="money" size="small" handleClick={() => {}}>
	<div class="flex space-b align-c">
		<Coin type="gold" amount={money.gold} />
		<Coin type="silver" amount={money.silver} />
		<Coin type="copper" amount={money.copper} />
	</div>
</Box>
