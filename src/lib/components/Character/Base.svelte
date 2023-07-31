<script lang="ts">
	import { BASE_LABELS } from '$lib/helpers/constants/languages';
	import Text from '../Text.svelte';
	import { currentActiveMenu, language } from '$lib/store';
	import Animals from './Base/Animals.svelte';
	import Equipment from './Base/Equipment.svelte';
	import Inventory from './Base/Inventory.svelte';
	import Notes from './Base/Notes.svelte';
	import Relations from './Base/Relations.svelte';
	import Skills from './Base/Skills.svelte';
	import Talents from './Base/Talents.svelte';
	import Box from '../Box.svelte';

	$: menuItem = $currentActiveMenu;

	const component = {
		experience: Skills,
		talent: Talents,
		inventory: Inventory,
		horse: Animals,
		relation: Relations,
		equipment: Equipment,
		notes: Notes
	};
</script>

<div class="base">
	<div class="flex space-b">
		<Text size="medium">{BASE_LABELS[$language][menuItem]}</Text>
		<Box handleClick={() => console.log('click')}>
			<Text size="large">+</Text>
		</Box>
	</div>
	<div class="main-part">
		<svelte:component this={component[menuItem]} />
	</div>
</div>

<style lang="scss">
	.base {
		width: 100%;
	}

	.space-b {
		padding: 0 var(--spacing-15) var(--spacing-10) 0;
	}

	.main-part {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-10);
		height: calc(100vh - var(--body-height-mobile) - 200px - 32px);
		overflow: auto;
		padding: var(--spacing-10) var(--spacing-15) var(--spacing-20) 0;
	}
</style>
