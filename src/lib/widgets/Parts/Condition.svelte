<script lang="ts">
	import CooledIcon from '$icons/Condition/CooledIcon.svelte';
	import DryIcon from '$icons/Condition/DryIcon.svelte';
	import SleeplessIcon from '$icons/Condition/SleeplessIcon.svelte';
	import StarvedIcon from '$icons/Condition/StarvedIcon.svelte';

	export let type: keyof Condition, isActive: boolean;

	const component = {
		cooled: CooledIcon,
		dry: DryIcon,
		sleepless: SleeplessIcon,
		starved: StarvedIcon
	};

	const color = isActive ? 'var(--color-active)' : 'var(--color-inactive)';
</script>

<div>
	<svelte:component this={component[type]} {color} />
</div>

<style>
	div:not(:last-child) {
		margin-right: var(--spacing-08);
	}
</style>
