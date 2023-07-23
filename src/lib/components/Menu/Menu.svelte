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

	const setCurrent = (item: MenuItems) => {
		current = item;
	};
</script>

<div>
	{#each menuItems as item}
		<button on:click={() => setCurrent(item)} class={current === item ? 'active' : null}>
			<MenuItem type={item} />
		</button>
	{/each}
</div>

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
