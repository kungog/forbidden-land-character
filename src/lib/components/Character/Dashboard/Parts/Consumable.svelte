<script lang="ts">
	import Text from '../../../Text.svelte';
	import ArrowIcon from '../../Icons/Consumable/ArrowIcon.svelte';
	import FoodIcon from '../../Icons/Consumable/FoodIcon.svelte';
	import TorchIcon from '../../Icons/Consumable/TorchIcon.svelte';
	import WaterIcon from '../../Icons/Consumable/WaterIcon.svelte';

	export let type: string, dice: number;
</script>

<div>
	{#if type === 'arrows'}
		<ArrowIcon />
	{:else if type === 'food'}
		<FoodIcon />
	{:else if type === 'torches'}
		<TorchIcon />
	{:else if type === 'water'}
		<WaterIcon />
	{/if}
	<Text>T{dice}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
