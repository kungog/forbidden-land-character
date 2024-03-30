<script lang="ts">
	import { modal, showModal } from '$store';
	import Modal from '$components/Modal.svelte';
	import ModalArmor from '$modals/ModalArmor.svelte';
	// import ModalWeapon from '$modals/ModalWeapon.svelte';
	import ModalWeapon from '$modals/NewWeapon.svelte';
	import ModalSkill from '$modals/ModalSkill.svelte';
	import ModalTalent from '$modals/ModalTalent.svelte';
	import ModalInventory from '$modals/ModalInventory.svelte';
	import ModalRelation from '$modals/ModalRelation.svelte';
	import ModalNote from '$modals/ModalNote.svelte';
	import ModalAnimal from '$modals/ModalAnimal.svelte';
	import ModalMoney from '$modals/ModalMoney.svelte';
	import ModalProperties from '$modals/ModalProperties.svelte';
	import ModalCondition from '$modals/ModalCondition.svelte';
	import ModalPoints from '$modals/ModalPoints.svelte';
	import ModalConsumables from '$modals/ModalConsumables.svelte';
	import ModalAnimalInventory from '$modals/ModalAnimalInventory.svelte';
	import ModalDescription from '$modals/ModalDescription.svelte';
	import ModalName from '$modals/ModalName.svelte';

	$: id = $modal.type;
	$: show = $showModal;

	const component = {
		armor: ModalArmor,
		weapons: ModalWeapon,
		skills: ModalSkill,
		inventory: ModalInventory,
		talents: ModalTalent,
		relations: ModalRelation,
		notes: ModalNote,
		animals: ModalAnimal,
		condition: ModalCondition,
		basic_properties: ModalProperties,
		consumables: ModalConsumables,
		power_points: ModalPoints,
		money: ModalMoney,
		animals_inventory: ModalAnimalInventory,
		description: ModalDescription,
		name: ModalName
	};
</script>

{#if $modal && id && show}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
