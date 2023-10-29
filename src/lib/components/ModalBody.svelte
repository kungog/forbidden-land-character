<script lang="ts">
	import ModalConfirm from './ModalConfirm.svelte';
	export let action: string, id: string;
</script>

<div>
	<form method="POST" {action} {id}>
		<slot />
	</form>
	<ModalConfirm />
</div>

<style lang="scss">
	div {
		padding: var(--spacing-18) 0 var(--spacing-48);
	}
</style>
