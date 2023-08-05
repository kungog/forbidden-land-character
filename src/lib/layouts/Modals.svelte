<script>
	import { modal } from '$lib/store';
	import Modal from '$lib/components/Modal.svelte';
	import ModalArmor from '$lib/components/Modals/ModalArmor.svelte';
	import ModalWeapon from '$lib/components/Modals/ModalWeapon.svelte';
	import ModalSkill from '$lib/components/Modals/ModalSkill.svelte';
	import ModalTalent from '$lib/components/Modals/ModalTalent.svelte';
	import ModalInventory from '$lib/components/Modals/ModalInventory.svelte';
	import ModalRelation from '$lib/components/Modals/ModalRelation.svelte';
	import ModalNote from '$lib/components/Modals/ModalNote.svelte';
	import ModalAnimal from '$lib/components/Modals/ModalAnimal.svelte';

	$: id = $modal?.id;

	const component = {
		armor: ModalArmor,
		weapon: ModalWeapon,
		skill: ModalSkill,
		inventory: ModalInventory,
		talent: ModalTalent,
		relation: ModalRelation,
		notes: ModalNote,
		horse: ModalAnimal
	};
</script>

{#if $modal && id}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
