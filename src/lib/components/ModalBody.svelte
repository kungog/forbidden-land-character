<script lang="ts">
	import ModalConfirm from './ModalConfirm.svelte';
</script>

<div>
	<slot />
	<ModalConfirm />
</div>

<style>
	div {
		padding: var(--spacing-18) 0 var(--spacing-48);
	}
</style>
