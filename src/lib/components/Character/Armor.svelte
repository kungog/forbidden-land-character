<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$components/Box.svelte';
	import Equipment from '$components/Equipment.svelte';
	import { modal, showModal } from '$store';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;

	const handleArmor = () => {
		$showModal = true;
		$modal = {
			type: 'armor',
			index: 0
		};
	};
</script>

<div>
	<Box className="head" handleClick={() => handleArmor()} size="small">
		<Equipment {...head} icon="head" />
	</Box>

	<Box className="body" handleClick={() => handleArmor()} size="small">
		<Equipment {...body} icon="body" />
	</Box>

	<Box className="shield" handleClick={() => handleArmor()} size="small">
		<Equipment {...shield} icon="shield" />
	</Box>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(1, 1fr);
		grid-template-areas:
			'head'
			'body'
			'shield';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
		min-height: 200px;
	}
</style>
