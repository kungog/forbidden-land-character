<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import MENU_ITEMS from '$lib/helpers/constants/menuItems';
</script>

<div class="flex column">
	{#each MENU_ITEMS as item}
		<MenuItem type={item} />
	{/each}
</div>

<style>
	div {
		gap: var(--spacing-08);
	}
</style>
