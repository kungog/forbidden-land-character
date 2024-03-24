<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '$components/Character/Dashboard.svelte';
	import Armor from '$components/Character/Armor.svelte';

	import WeaponIcon from '$icons/Menu/WeaponIcon.svelte';
	import ExperienceIcon from '$icons/Menu/ExperienceIcon.svelte';
	import HorseIcon from '$icons/Menu/HorseIcon.svelte';
	import InventoryIcon from '$icons/Menu/InventoryIcon.svelte';
	import RelationIcon from '$icons/Menu/RelationIcon.svelte';
	import TalentIcon from '$icons/Menu/TalentIcon.svelte';
	import NotesIcon from '$icons/Menu/NotesIcon.svelte';
	import type { SvelteComponent } from 'svelte';
	import { currentBase } from '$lib/store';

	export let data: PageData;
	const { _id } = data?.character;
	const MENU_ITEMS: MenuItems[] = [
		'talents',
		'experience',
		'weapons',
		'animals',
		'inventory',
		'relations',
		'notes'
	];

	const component: Record<
		MenuItems,
		typeof SvelteComponent<{ width: number; height: number; color: string } & any>
	> = {
		experience: ExperienceIcon,
		inventory: InventoryIcon,
		animals: HorseIcon,
		relations: RelationIcon,
		talents: TalentIcon,
		weapons: WeaponIcon,
		notes: NotesIcon
	};
</script>

{#if $currentBase === 0}
	<Dashboard />
{/if}
{#if $currentBase === 1}
	<Armor />
{/if}
{#if $currentBase === 2}
	<div>Karaktäeen</div>
{/if}

<section>
	{#each MENU_ITEMS as item}
		<a
			class="flex align-c justify-c"
			href="/characters/{_id}/{item}"
			style="background: var(--color-{item})"
		>
			<svelte:component this={component[item]} color="var(--color-{item})" height={75} width={75} />
			<span style="color: var(--color-{item}-dark)">{item}</span>
		</a>
	{/each}
</section>

<style>
	section {
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
		position: relative;
		overflow: hidden;
	}

	span {
		position: relative;
		z-index: 1;
		font-size: 18px;
	}
</style>
