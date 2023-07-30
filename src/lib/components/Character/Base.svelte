<script lang="ts">
	import { currentActiveMenu } from '../store';
	import Animals from './Base/Animals.svelte';
	import Equipment from './Base/Equipment.svelte';
	import Inventory from './Base/Inventory.svelte';
	import Notes from './Base/Notes.svelte';
	import Relations from './Base/Relations.svelte';
	import Skills from './Base/Skills.svelte';
	import Talents from './Base/Talents.svelte';

	$: menuItem = $currentActiveMenu;

	const component = {
		experience: Skills,
		talent: Talents,
		inventory: Inventory,
		horse: Animals,
		relation: Relations,
		equipment: Equipment,
		notes: Notes
	};
</script>

<div>
	<svelte:component this={component[menuItem]} />
</div>

<style lang="scss">
	div {
		width: 100%;
	}
</style>
