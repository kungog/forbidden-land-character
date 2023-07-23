<script lang="ts">
	import Box from '../../Box.svelte';
	import Coin from './Parts/Coin.svelte';
	export let money: Character['money'];
</script>

<div>
	<Box size="small" handleClick={() => {}}>
		<div class="flex space-b align-c">
			<Coin type="gold" amount={money.gold} />
			<Coin type="silver" amount={money.silver} />
			<Coin type="copper" amount={money.copper} />
		</div>
	</Box>
</div>

<style lang="scss">
	div:has(button) {
		grid-area: money;
		width: 100%;
	}
</style>
