<script lang="ts">
	export let handleClick: any,
		size: 'medium' | 'small' = 'small';
</script>

<button on:click={handleClick} class={`box-btn-${size}`}>
	<slot />
</button>

<style lang="scss">
	%button-shared {
		background: var(--color-box);
		color: var(--color-text);
		border-radius: var(--radius-04);
		border: none;
		width: 100%;
	}

	.box-btn-small {
		@extend %button-shared;
		padding: var(--spacing-08) var(--spacing-14);
	}

	.box-btn-medium {
		@extend %button-shared;
		padding: var(--spacing-18);
	}
</style>
