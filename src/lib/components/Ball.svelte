<script lang="ts">
	export let active = false;
	export let handleClick: any;
</script>

<button on:click={handleClick} class={active ? 'active ' : ''} />

<style lang="scss">
	button {
		position: relative;
		background: var(--color);
		border: 0;
		outline: 4px solid transparent;
		border-radius: 999px;
		font-size: 10px;
		width: var(--size, 50px);
		height: var(--size, 50px);

		&::after {
			content: '';
			position: absolute;
			width: 55px;
			height: 55px;
			z-index: 1;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 999px;
			border: 2px solid transparent;
		}

		&.active {
			&::after {
				border-color: var(--color-accent);
			}
		}

		@media (max-width: 660px) {
			width: 24px;
			height: 24px;

			&::after {
				width: 28px;
				height: 28px;
			}
		}
	}
</style>
