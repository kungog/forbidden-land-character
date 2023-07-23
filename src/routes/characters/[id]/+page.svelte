<script lang="ts">
	import { page } from '$app/stores';
	import CharacterInventory from '$lib/components/CharacterInventory.svelte';
	import Dashboard from '$lib/components/Character/Dashboard/index.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log('DATA ---->', data.character);

	const character = data.character;
</script>

<Dashboard
	consumables={character.consumables}
	properties={character.basic_properties}
	condition={character.condition}
	critical={character.critical_injuries}
	money={character.money}
	experience={character.experience}
	powerPoints={character.power_points}
/>
<Menu />
<CharacterInventory
	armor={character.armor}
	animals={character.animals}
	notes={character.notes}
	inventory={character.inventory}
	relations={character.relations}
	skills={character.skills}
	weapons={character.weapons}
	talents={character.talents}
/>
