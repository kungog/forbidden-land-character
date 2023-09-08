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
	import ModalMoney from '$lib/components/Modals/ModalMoney.svelte';
	import ModalProperties from '$lib/components/Modals/ModalProperties.svelte';
	import ModalCondition from '$lib/components/Modals/ModalCondition.svelte';
	import ModalPoints from '$lib/components/Modals/ModalPoints.svelte';
	import ModalConsumables from '$lib/components/Modals/ModalConsumables.svelte';

	$: id = $modal?.id;

	const component = {
		armor: ModalArmor,
		weapon: ModalWeapon,
		skill: ModalSkill,
		inventory: ModalInventory,
		talent: ModalTalent,
		relation: ModalRelation,
		notes: ModalNote,
		animal: ModalAnimal,
		condition: ModalCondition,
		properties: ModalProperties,
		consumables: ModalConsumables,
		points: ModalPoints,
		money: ModalMoney
	};
</script>

{#if $modal && id}
	<Modal>
		<svelte:component this={component[id]} />
	</Modal>
{/if}
