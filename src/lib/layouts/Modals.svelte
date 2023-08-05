<script>
	import { modal } from '$lib/store';
	import Modal from '$lib/components/Modal.svelte';
	import ModalArmor from '$lib/components/Modals/ModalArmor.svelte';
	import ModalWeapon from '$lib/components/Modals/ModalWeapon.svelte';
	import ModalSkill from '$lib/components/Modals/ModalSkill.svelte';
	$: id = $modal?.id;

	const component = {
		armor: ModalArmor,
		weapon: ModalWeapon,
		skill: ModalSkill
	};
</script>

{#if $modal}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
