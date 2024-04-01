<script lang="ts">
	export let remove = true,
		onSubmit: () => void,
		onConfirm: () => void;
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { capitalize } from '$helpers/utilites';
	import TrashIcon from '$icons/General/TrashIcon.svelte';

	const save = GENERAL_LABELS[$language].save;
</script>

<div>
	{#if remove}
		<button on:click={onConfirm}><TrashIcon /></button>
	{/if}
	<button on:click={onSubmit}>{capitalize(save)}</button>
</div>

<style lang="scss">
	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}

	div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--spacing-10);
	}

	button {
		@extend %shared-button;
	}

	button:first-child {
		background: var(--color-active);
		border-radius: 4px;
		height: var(--spacing-48);
		width: var(--spacing-54);
	}

	button:last-child {
		background: var(--color-inactive);
		width: var(--spacing-130);
		height: var(--spacing-48);
		border-radius: 4px;
	}
</style>
