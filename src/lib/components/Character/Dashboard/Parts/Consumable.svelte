<script lang="ts">
	import Text from '../../../Text.svelte';
	import ArrowIcon from '../../Icons/Consumable/ArrowIcon.svelte';
	import FoodIcon from '../../Icons/Consumable/FoodIcon.svelte';
	import TorchIcon from '../../Icons/Consumable/TorchIcon.svelte';
	import WaterIcon from '../../Icons/Consumable/WaterIcon.svelte';

	export let type: keyof Consumables, dice: number;

	const component = {
		arrows: ArrowIcon,
		food: FoodIcon,
		torches: TorchIcon,
		water: WaterIcon
	};
</script>

<div>
	<svelte:component this={component[type]} />
	<Text>T{dice}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
