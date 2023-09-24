<script lang="ts">
	import { fly } from 'svelte/transition';
	export let handleClick: any,
		className: string = '',
		hidden: boolean = false,
		inverted: boolean = false,
		active: boolean = false,
		transition: boolean = false,
		size: 'medium' | 'small' = 'small';

	$: isHidden = hidden ? 'hidden' : '';
	$: isInverted = inverted ? 'inverted' : '';
	$: isActive = active ? 'active' : '';
	$: hasTransition = transition ? { y: 20 } : {};
</script>

<button
	on:click={handleClick}
	class={`${className} box-btn-${size} ${isHidden} ${isInverted} ${isActive}`}
	in:fly={hasTransition}
>
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

	.inverted {
		background: var(--color-background);
	}

	.active {
		border: 1px solid var(--color-accent);
	}
</style>
