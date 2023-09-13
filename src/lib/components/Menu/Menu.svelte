<script lang="ts">
	export let combat: boolean = false;
	import MenuItem from './MenuItem.svelte';
	import { CHARACTER_MENU_ITEMS, COMBAT_MENU_ITEMS } from '$lib/helpers/constants/menuItems';

	const MENU_ITEMS = combat ? COMBAT_MENU_ITEMS : CHARACTER_MENU_ITEMS;
</script>

<aside class="flex column">
	{#each MENU_ITEMS as item}
		<MenuItem type={item} />
	{/each}
</aside>

<style>
	aside {
		gap: var(--spacing-08);
	}
</style>
