<script lang="ts">
	export let handleClick: any,
		className: string = '',
		hidden: boolean = false,
		size: 'medium' | 'small' = 'small';

	$: isHidden = hidden ? 'hidden' : '';
</script>

<button on:click={handleClick} class={`${className} box-btn-${size} ${isHidden}`}>
	<slot />
</button>

<style lang="scss">
	%button-shared {
		background: var(--color-box);
		color: var(--color-text);
		border-radius: var(--radius-04);
		border: none;
	}

	.box-btn-small {
		@extend %button-shared;
		padding: var(--spacing-08) var(--spacing-14);
	}

	.box-btn-medium {
		@extend %button-shared;
		padding: var(--spacing-18);
	}

	.hidden {
		opacity: 0;
		pointer-events: none;
	}
</style>
