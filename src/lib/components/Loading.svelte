<div>
	<div class="spinner" />
</div>

<style>
	div {
		padding: var(--spacing-08);
		border-radius: 999px;
	}

	.spinner {
		background: var(--color-black);
		position: relative;
	}

	.spinner::before {
		content: '';
		position: absolute;
		top: 7px;
		right: 0;
		width: 16px;
		height: 2px;
		background: var(--accent-color);
		z-index: 1;

		animation-name: spin;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;

		/* transform: rotate(180deg);
    transition: transform 0.3s ease; */
	}

	.spinner::after {
		content: '';
		position: absolute;
		padding: 4px;
		top: 0;
		right: 0;
		transform: translate(-50%, 50%);
		background: var(--accent-color);
		border-radius: 999px;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
