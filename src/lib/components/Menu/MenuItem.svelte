<script lang="ts">
	import { currentActiveMenu } from '../store';
	import EquipmentIcon from './Icons/EquipmentIcon.svelte';
	import ExperienceIcon from './Icons/ExperienceIcon.svelte';
	import HorseIcon from './Icons/HorseIcon.svelte';
	import InventoryIcon from './Icons/InventoryIcon.svelte';
	import RelationIcon from './Icons/RelationIcon.svelte';
	import TalentIcon from './Icons/TalentIcon.svelte';
	import NotesIcon from './Icons/NotesIcon.svelte';

	export let type: MenuItems;

	const component = {
		experience: ExperienceIcon,
		inventory: InventoryIcon,
		horse: HorseIcon,
		relation: RelationIcon,
		talent: TalentIcon,
		equipment: EquipmentIcon,
		notes: NotesIcon
	};

	const handleChange = () => {
		$currentActiveMenu = type;
	};

	$: isActive = type === $currentActiveMenu ? 'active' : null;
</script>

<button on:click={() => handleChange()} class={isActive}>
	<svelte:component this={component[type]} />
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
