<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import MENU_ITEMS from '$lib/helpers/constants/menuItems';
</script>

<div>
	{#each MENU_ITEMS as item}
		<MenuItem type={item} />
	{/each}
</div>
