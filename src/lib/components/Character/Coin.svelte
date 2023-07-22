<script lang="ts">
	import Text from '../Text.svelte';
	import CoinIcon from './Icons/General/CoinIcon.svelte';

	export let type: 'gold' | 'silver' | 'copper', amount: number;

	let color: '#F2A965' | '#929292' | '#FFF7AE' | '#676464';

	switch (type) {
		case 'gold':
			color = '#FFF7AE';
			break;
		case 'silver':
			color = '#929292';
			break;
		case 'copper':
			color = '#F2A965';
			break;
	}
</script>

<div>
	<CoinIcon {color} />
	<Text>{amount}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}
</style>
