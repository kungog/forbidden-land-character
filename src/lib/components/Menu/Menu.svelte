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

	let currentActiveItem = 'experience';

	const handleChangeMenuItem = (string: string) => {
		currentActiveItem = string;
	};
</script>

<div>
	{#each menuItems as item}
		<MenuItem
			type={item}
			current={currentActiveItem === item}
			handleClick={() => handleChangeMenuItem(item)}
		/>
	{/each}
</div>

<style lang="scss">
</style>
