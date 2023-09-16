<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Weapon from './Parts/Weapon.svelte';

	const { weapons }: Character = $page.data.character;

	const handleWeaponModal = (type: null | number) => {
		$modal = {
			type,
			id: 'weapon'
		};
	};
</script>

{#each weapons as weapon, index}
	<Box handleClick={() => handleWeaponModal(index)}>
		<Weapon {...weapon} />
	</Box>
{/each}
