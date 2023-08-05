<script lang="ts">
	import { modal } from '$lib/store';
	import TrashIcon from './Character/Icons/General/TrashIcon.svelte';
	import Text from './Text.svelte';

	const label = $modal?.type ?? '';
</script>

<dialog>
	<button class="overlay" on:click={() => ($modal = null)} />
	<div class="modal">
		<div class="top">
			<Text size="medium">{label}</Text>
			<button on:click={() => ($modal = null)}>x</button>
		</div>
		<div class="content">
			<slot />
		</div>
		<div class="bottom">
			<button on:click={() => ($modal = null)}><TrashIcon /></button>
			<button>spara</button>
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
		width: 75%;
		border: 1px solid white;
		background: var(--color-background);
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
		padding-bottom: var(--spacing-48);
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
