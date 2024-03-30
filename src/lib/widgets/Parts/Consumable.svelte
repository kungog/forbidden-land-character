<script lang="ts">
	import Text from '$components/Text.svelte';
	import ArrowIcon from '$icons/Consumable/ArrowIcon.svelte';
	import FoodIcon from '$icons/Consumable/FoodIcon.svelte';
	import TorchIcon from '$icons/Consumable/TorchIcon.svelte';
	import WaterIcon from '$icons/Consumable/WaterIcon.svelte';

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
