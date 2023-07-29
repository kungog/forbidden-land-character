<script lang="ts">
	import Text from '../../../Text.svelte';
	import CoinIcon from '../../Icons/General/CoinIcon.svelte';

	export let type: 'gold' | 'silver' | 'copper', amount: number;

	let color:
		| 'var(--color-copper)'
		| 'var(--color-silver)'
		| 'var(--color-gold)'
		| 'var(--color-inactive)';

	switch (type) {
		case 'gold':
			color = 'var(--color-gold)';
			break;
		case 'silver':
			color = 'var(--color-silver)';
			break;
		case 'copper':
			color = 'var(--color-copper)';
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
