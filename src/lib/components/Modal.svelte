<script lang="ts">
	import getSkillObject from '$lib/helpers/getSkills';
	import { capitalize } from '$lib/helpers/utilites';
	import { language, modal } from '$lib/store';
	import TrashIcon from './Character/Icons/General/TrashIcon.svelte';
	import Text from './Text.svelte';

	const getFormData = (selector: any) => {
		let formValues = Object.fromEntries(new FormData(document.querySelector(selector)));
		console.log(formValues);
	};

	const noLabels = ['weapon', 'newWeapon'];
	const getLabel = () => {
		if (!$modal?.id) return '';

		if (noLabels.includes($modal?.id)) return '';
		if ($modal?.id === 'skill') {
			const skillObject = getSkillObject($modal?.type);
			return skillObject.languages[$language];
		}

		return '';
	};

	const label = getLabel();
</script>

<dialog>
	<button class="overlay" on:click={() => ($modal = null)} />
	<div class="modal">
		<div class="top">
			<Text size="medium">{capitalize(label)}</Text>
			<button on:click={() => ($modal = null)}>x</button>
		</div>

		<div class="content">
			<form id="modalForm">
				<slot />
			</form>
		</div>
		<div class="bottom">
			<button on:click={() => ($modal = null)}><TrashIcon /></button>
			<button name="submit" on:click={() => getFormData('#modalForm')}>spara</button>
		</div>
	</div>
</dialog>

<style lang="scss">
	%shared-position {
		position: absolute;
	}

	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}

	.overlay {
		@extend %shared-button;
		@extend %shared-position;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 20%);
		backdrop-filter: blur(2px);
	}

	dialog {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
	}

	.modal {
		position: relative;
		z-index: 101;
		min-height: 10%;
		width: 90%;
		background: var(--color-box);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
	}

	.top {
		display: flex;

		button {
			@extend %shared-button;
			font-size: 20px;
			height: 24px;
			width: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: auto;
		}
	}

	.content {
		padding: var(--spacing-18) 0 var(--spacing-48);
	}

	.bottom {
		display: flex;
		align-items: center;
		justify-content: flex-end;

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
	}
</style>
