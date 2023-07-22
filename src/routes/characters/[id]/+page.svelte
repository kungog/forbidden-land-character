<script lang="ts">
	import { page } from '$app/stores';
	import Dashboard from '$lib/components/Dashboard.svelte';
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
