<script lang="ts">
	export let handleClick: any,
		className: string = '',
		size: 'medium' | 'small' = 'small';
</script>

<button on:click={handleClick} class={`${className} box-btn-${size}`}>
	<slot />
</button>

<style lang="scss">
	%button-shared {
		background: var(--color-box);
		color: var(--color-text);
		border-radius: var(--radius-04);
		border: none;
		width: 100%;
		height: 100%;
		align-items: center;
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
