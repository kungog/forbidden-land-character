<script lang="ts">
	import Text from '../../../Text.svelte';
	import CharismaIcon from '../../Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from '../../Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from '../../Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from '../../Icons/Property/StrengthIcon.svelte';

	export let type: string, amount: number;
</script>

<div>
	{#if type === 'strength'}
		<StrengthIcon />
	{:else if type === 'charisma'}
		<CharismaIcon />
	{:else if type === 'flexibility'}
		<FlexibilityIcon />
	{:else if type === 'intelligence'}
		<IntelligenceIcon />
	{/if}
	<Text>{amount}</Text>
</div>

<style lang="scss">
	div {
		display: grid;
		justify-items: center;
		gap: 10px;
	}
</style>
