<script lang="ts">
	import Text from '$components/Text.svelte';
	import CharismaIcon from '$icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '$icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '$icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '$icons/Property/StrengthIcon.svelte';

	export let type: BasicProperties['id'],
		amount: BasicProperties['value'],
		failure: BasicProperties['failure'];

	const component = {
		strength: StrengthIcon,
		charisma: CharismaIcon,
		flexibility: FlexibilityIcon,
		intelligence: IntelligenceIcon
	};

	const totalAmount = amount - failure;
	const damage = failure >= 1 ? 'var(--color-active)' : 'var(--color-text)';
	const warning = failure >= 1;
</script>

<div>
	<svelte:component this={component[type]} pulse={!!warning} />
	<Text color={damage}>{totalAmount}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
