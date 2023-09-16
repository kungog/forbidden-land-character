<script lang="ts">
	import { BASE_LABELS } from '$lib/helpers/constants/languages';
	import Text from '../Text.svelte';
	import { activeMenu, language, modal } from '$lib/store';
	import Animals from '../Base/Animals.svelte';
	import Armor from '../Base/Armor.svelte';
	import Inventory from '../Base/Inventory.svelte';
	import Notes from '../Base/Notes.svelte';
	import Relations from '../Base/Relations.svelte';
	import Skills from '../Base/Skills.svelte';
	import Talents from '../Base/Talents.svelte';
	import Weapons from '../Base/Weapons.svelte';
	import Box from '../Box.svelte';

	$: menuItem = $activeMenu;

	const hide = ['experience'];
	const component = {
		experience: Skills,
		talent: Talents,
		inventory: Inventory,
		animal: Animals,
		relation: Relations,
		armor: Armor,
		weapon: Weapons,
		note: Notes
	};

	const handleModal = () => {
		$modal = {
			type: null,
			id: menuItem
		};
	};
</script>

<div>
	<div class="flex space-b">
		<Text size="medium">{BASE_LABELS[$language][menuItem]}</Text>
		<Box handleClick={() => handleModal()} hidden={hide.includes(menuItem)}>
			<Text size="large">+</Text>
		</Box>
	</div>
	<div class="main-part">
		<svelte:component this={component[menuItem]} />
	</div>
</div>

<style lang="scss">
	.space-b {
		padding-bottom: var(--spacing-10);
	}

	.main-part {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-08);
		height: calc(var(--body-height-mobile) - 200px - var(--spacing-35));
		overflow: auto;
		padding-bottom: var(--spacing-20);
	}
</style>
