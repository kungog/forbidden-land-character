<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '$lib/components/Character/Dashboard.svelte';

	export let data: PageData;
	const character = data?.character;
	const MENU_ITEMS: MenuItems[] = [
		'talents',
		'experience',
		'equipments',
		'weapons',
		'animals',
		'inventory',
		'relations',
		'notes'
	];
</script>

<Dashboard />
<div>
	{#each MENU_ITEMS as item}
		<a
			class="flex align-c justify-c"
			href="/characters/{character._id}/{item}"
			style="background: var(--color-{item})"
		>
			{item}
		</a>
	{/each}
</div>

<style>
	div {
		display: grid;
		height: calc(100% - 210px);
		gap: var(--spacing-10);
		margin: 0 var(--spacing-10) var(--spacing-10);
	}

	a {
		border-radius: var(--radius-04);
		text-transform: uppercase;
		letter-spacing: 1.8px;
		font-weight: bold;
	}
</style>
