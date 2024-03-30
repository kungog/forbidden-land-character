<script lang="ts">
	export let character: Character,
		remove = true;
	import { language, showConfirm } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { capitalize } from '$lib/helpers/utilites';
	import TrashIcon from './Icons/General/TrashIcon.svelte';
	const save = GENERAL_LABELS[$language]['save'];

	const submit = async () => {
		const response = await fetch('/characters/' + character._id, {
			method: 'POST',
			body: JSON.stringify(character)
		});

		await response.json();
	};
</script>

<div>
	{#if remove}
		<button on:click={() => ($showConfirm = true)}><TrashIcon /></button>
	{/if}
	<button on:click={() => submit()}>{capitalize(save)}</button>
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
