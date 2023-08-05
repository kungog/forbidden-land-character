<script lang="ts">
	import { modal } from '$lib/store';
</script>

<div class="modal">
	<button class="overlay" on:click={() => ($modal = null)} />
	<div class="content">
		<div class="top">
			<button on:click={() => ($modal = null)}>x</button>
		</div>

		<slot />

		<div class="bottom">
			<button on:click={() => ($modal = null)}>trash</button>
			<button>spara</button>
		</div>
	</div>
</div>

<style lang="scss">
	%shared-position {
		position: absolute;
	}

	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
	}

	.overlay {
		@extend %shared-button;
		@extend %shared-position;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 20%);
		backdrop-filter: blur(2px);
	}

	.modal {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
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
		button {
			@extend %shared-button;
			@extend %shared-position;
			font-size: 20px;
			height: 24px;
			width: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			right: var(--spacing-10);
			top: var(--spacing-10);
		}
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
		}

		button:last-child {
			background: var(--color-inactive);
		}
	}
</style>
