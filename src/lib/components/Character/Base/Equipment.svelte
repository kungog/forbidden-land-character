<script lang="ts">
	import { page } from '$app/stores';
	import { BASE_LABELS } from '$lib/helpers/constants/languages';
	import { language, modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import Equipment from './Parts/Equipment.svelte';
	import Weapon from './Parts/Weapon.svelte';

	const {
		armor: { head, body, shield },
		weapons
	}: Character = $page.data.character;
	const LABELS = BASE_LABELS[$language];

	const handleArmor = () => {
		$modal = {
			type: null,
			id: 'armor'
		};
	};

	const handleWeaponModal = (type: null | number) => {
		$modal = {
			type,
			id: 'weapon'
		};
	};
</script>

<Box handleClick={() => handleArmor()}>
	<Equipment {...head} icon="head" />
	<Equipment {...body} icon="body" />
	<Equipment {...shield} icon="shield" />
</Box>

<div class="flex space-b">
	<Text size="normal">{LABELS['weapons']}</Text>
	<Box handleClick={() => handleWeaponModal(null)}>
		<Text size="large">+</Text>
	</Box>
</div>

{#each weapons as weapon, index}
	<Box handleClick={() => handleWeaponModal(index)}>
		<Weapon {...weapon} />
	</Box>
{/each}

<style>
	.flex {
		margin-top: var(--spacing-18);
	}
</style>
