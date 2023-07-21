<script lang="ts">
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
	<span>{amount}</span>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		:last-child {
			margin-left: var(--spacing-08);
		}
	}
</style>
