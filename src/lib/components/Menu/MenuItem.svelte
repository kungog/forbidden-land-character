<script lang="ts">
	import ArmorIcon from './Icons/ArmorIcon.svelte';
	import ExperienceIcon from './Icons/ExperienceIcon.svelte';
	import HorseIcon from './Icons/HorseIcon.svelte';
	import InventoryIcon from './Icons/InventoryIcon.svelte';
	import RelationIcon from './Icons/RelationIcon.svelte';
	import TalentIcon from './Icons/TalentIcon.svelte';

	export let type: MenuItems;
</script>

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
