<script lang="ts">
	import CharismaIcon from './Icons/Property/CharismaIcon.svelte';
	import FlexibilityIcon from './Icons/Property/FlexibilityIcon.svelte';
	import IntelligenceIcon from './Icons/Property/IntelligenceIcon.svelte';
	import StrengthIcon from './Icons/Property/StrengthIcon.svelte';

	export let type: string, isActive: boolean;

	const color = isActive ? '#BA4047' : '#676464';
</script>

{#if type === 'strength'}
	<StrengthIcon />
{:else if type === 'charisma'}
	<CharismaIcon />
{:else if type === 'flexibility'}
	<FlexibilityIcon />
{:else if type === 'intelligence'}
	<IntelligenceIcon />
{/if}

<style lang="scss">
	svg:not(:last-child) {
		margin-right: var(--spacing-08);
	}
</style>
