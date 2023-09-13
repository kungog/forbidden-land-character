<script lang="ts">
	import { characterActiveMenu } from '$lib/store';
	import EquipmentIcon from './Icons/EquipmentIcon.svelte';
	import ExperienceIcon from './Icons/ExperienceIcon.svelte';
	import HorseIcon from './Icons/HorseIcon.svelte';
	import InventoryIcon from './Icons/InventoryIcon.svelte';
	import RelationIcon from './Icons/RelationIcon.svelte';
	import TalentIcon from './Icons/TalentIcon.svelte';
	import NotesIcon from './Icons/NotesIcon.svelte';

	export let type: CharacterMenuItems;

	const component = {
		experience: ExperienceIcon,
		inventory: InventoryIcon,
		animal: HorseIcon,
		relation: RelationIcon,
		talent: TalentIcon,
		equipment: EquipmentIcon,
		notes: NotesIcon
	};

	const handleChange = () => {
		$characterActiveMenu = type;
	};

	$: isActive = type === $characterActiveMenu ? 'active' : null;
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
		height: 10%;
		width: 100%;
		background-color: var(--color-blue);
		border-radius: 0 var(--radius-04) var(--radius-04) 0;
		padding: 0;
	}

	button.active {
		background-color: var(--color-blue-active);
	}
</style>
