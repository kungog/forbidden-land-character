<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Equipment from './Parts/Equipment.svelte';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;

	const handleArmor = () => {
		$modal = {
			type: null,
			id: 'armor'
		};
	};
</script>

<Box handleClick={() => handleArmor()}>
	<Equipment {...head} icon="head" />
	<Equipment {...body} icon="body" />
	<Equipment {...shield} icon="shield" />
</Box>
