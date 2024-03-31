<script lang="ts">
	import { capitalize } from '$helpers/utilites';
	import ModalFooter from './ModalFooter.svelte';
	import Overlay from './Overlay.svelte';
	import Text from './Text.svelte';
	export let handleClose: () => void,
		handleRemove: any,
		label: string = '';
</script>

<Overlay handleClick={handleClose} />
<dialog>
	<section>
		<div class="flex">
			<Text size="medium">{capitalize(label)}</Text>
			<button on:click={handleClose}>x</button>
		</div>
		<div class="body">
			<slot />
		</div>
		<ModalFooter />
	</section>
</dialog>

<style lang="scss">
	dialog {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: 0;
		pointer-events: none;
		padding: 0;
		top: 0;
	}

	section {
		position: relative;
		z-index: 101;
		min-height: 10%;
		max-height: 90vh;
		overflow: auto;
		width: 90%;
		background: var(--color-background);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
		pointer-events: initial;
	}

	button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
		font-size: 20px;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
	}

	.body {
		padding: var(--spacing-18) 0 var(--spacing-48);
	}
</style>
