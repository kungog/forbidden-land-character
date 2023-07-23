<script lang="ts">
	import CooledIcon from '../../Icons/Condition/CooledIcon.svelte';
	import DryIcon from '../../Icons/Condition/DryIcon.svelte';
	import SleeplessIcon from '../../Icons/Condition/SleeplessIcon.svelte';
	import StarvedIcon from '../../Icons/Condition/StarvedIcon.svelte';

	export let type: string, isActive: boolean;

	const color = isActive ? '#BA4047' : '#676464';
</script>

<div>
	{#if type === 'cooled'}
		<CooledIcon {color} />
	{:else if type === 'dry'}
		<DryIcon {color} />
	{:else if type === 'sleepless'}
		<SleeplessIcon {color} />
	{:else if type === 'starved'}
		<StarvedIcon {color} />
	{/if}
</div>

<style>
	div:not(:last-child) {
		margin-right: var(--spacing-08);
	}
</style>
