<script lang="ts">
	import ArmorIcon from './Icons/ArmorIcon.svelte';
	import ExperienceIcon from './Icons/ExperienceIcon.svelte';
	import HorseIcon from './Icons/HorseIcon.svelte';
	import InventoryIcon from './Icons/InventoryIcon.svelte';
	import RelationIcon from './Icons/RelationIcon.svelte';
	import TalentIcon from './Icons/TalentIcon.svelte';

	export let type: MenuItems, active: boolean, handleClick: () => void;
</script>

<button on:click={handleClick} class={active ? 'active' : null}>
	{#if type === 'experience'}
		<ExperienceIcon />
	{:else if type === 'inventory'}
		<InventoryIcon />
	{:else if type === 'horse'}
		<HorseIcon />
	{:else if type === 'relation'}
		<RelationIcon />
	{:else if type === 'talent'}
		<TalentIcon />
	{:else if type === 'armor'}
		<ArmorIcon />
	{/if}

</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		border: none;
		justify-content: center;
		height: 53px;
		width: 63px;
		background-color: var(--color-blue);
		border-radius: 0 var(--radius-04) var(--radius-04) 0;
	}

	button.active {
		background-color: var(--color-blue-active);
	}

	button:not(:last-child) {
		margin-bottom: var(--spacing-08);
	}
</style>
