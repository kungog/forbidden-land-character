<script lang="ts">
	export let onDelete: () => void, onClose: () => void;
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { capitalize } from '$helpers/utilites';
	import Text from './Text.svelte';
	import Divider from './Divider.svelte';
	const labels = GENERAL_LABELS[$language];
</script>

<div>
	<Text size="medium">{capitalize(labels.sure)}</Text>
	<Text size="medium">{capitalize(labels.no_regrets)}</Text>
	<Divider />
	<section>
		<button on:click={onDelete}>{capitalize(labels.yes)}</button>
		<button on:click={onClose}>{capitalize(labels.no)}</button>
	</section>
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
		flex-direction: column;
		align-items: center;
		position: absolute;
		justify-content: center;
		z-index: 1;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: var(--color-background);
		border-radius: var(--radius-04);
	}

	button {
		@extend %shared-button;
	}

	button:first-child {
		background: var(--color-active);
		border-radius: 4px;
		height: var(--spacing-48);
		width: var(--spacing-54);
		margin-right: var(--spacing-10);
	}

	button:last-child {
		background: var(--color-inactive);
		width: var(--spacing-130);
		height: var(--spacing-48);
		border-radius: 4px;
	}
</style>
