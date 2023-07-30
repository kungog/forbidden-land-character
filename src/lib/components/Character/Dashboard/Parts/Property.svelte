<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import CharismaIcon from '../../Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '../../Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '../../Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '../../Icons/Property/StrengthIcon.svelte';

	export let type: BasicProperties['id'], amount: number;

	const component = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};
</script>

<div>
	<svelte:component this={component[type]} />
	<Text>{amount}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
