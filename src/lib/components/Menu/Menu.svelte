<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	const menuItems: MenuItems[] = [
		'experience',
		'talent',
		'armor',
		'horse',
		'inventory',
		'relation'
	];
	let current = menuItems[0];

	const setCurrent = (item: MenuItems) => (current = item);
</script>

<div>
	{#each menuItems as item}
		<MenuItem type={item} handleClick={() => setCurrent(item)} active={current === item} />
	{/each}
</div>
