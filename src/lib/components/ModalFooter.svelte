<script lang="ts">
	export let remove: boolean,
		onSubmit: () => void,
		onConfirm: () => void,
		specialButton: any,
		icon: 'dice' | 'talent' | 'trash' = 'dice';
	import { language } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { capitalize } from '$helpers/utilites';
	import TrashIcon from '$icons/General/TrashIcon.svelte';
	import DiceIcon from '$icons/General/DiceIcon.svelte';
	import TalentIcon from '$icons/Menu/TalentIcon.svelte';
	const save = GENERAL_LABELS[$language].save;

	const specialIcons = {
		dice: DiceIcon,
		talent: TalentIcon,
		trash: TrashIcon
	};
</script>

<section>
	{#if specialButton}
		<button on:click={specialButton}>
			<svelte:component this={specialIcons[icon]} />
		</button>
	{/if}

	<div>
		{#if remove}
			<button on:click={onConfirm}><TrashIcon /></button>
		{/if}
		<button on:click={onSubmit}>{capitalize(save)}</button>
	</div>
</section>

<style lang="scss">
	section > button {
		border-radius: var(--radius-04);
		background-color: var(--color-blue);
		position: absolute;
		height: var(--spacing-48);
		width: var(--spacing-64);
	}

	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}

	button {
		@extend %shared-button;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--spacing-10);

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
	}
</style>
