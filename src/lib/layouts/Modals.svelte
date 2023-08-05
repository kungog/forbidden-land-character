<script>
	import { modal } from '$lib/store';
	import Modal from '$lib/components/Modal.svelte';
	import ModalArmor from '$lib/components/Modals/ModalArmor.svelte';
	$: type = $modal?.type;
	$: id = $modal?.id;

	const component = {
		armor: ModalArmor
	};
</script>

{#if $modal}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
