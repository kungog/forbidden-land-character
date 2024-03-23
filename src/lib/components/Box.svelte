<script lang="ts">
	import { fly } from 'svelte/transition';
	export let handleClick: any;
	export let className: string = '';
	export let hidden: boolean = false;
	export let inverted: boolean = false;
	export let active: boolean = false;
	export let transition: boolean = false;
	export let special: boolean = false;
	export let size: 'medium' | 'small' = 'medium';
	export let background = '';

	$: isHidden = hidden ? 'hidden' : '';
	$: isInverted = inverted ? 'inverted' : '';
	$: isActive = active ? 'active' : '';
	$: isSpecial = special ? 'special' : '';
	$: hasTransition = transition ? { y: 20 } : {};
</script>

<button
	on:click={handleClick}
	class={`${className} box-btn-${size} ${isHidden} ${isInverted} ${isActive} ${isSpecial}`}
	in:fly={hasTransition}
	type="button"
	style={background ? `background: ${background}` : ''}
>
	<slot />
</button>

<style lang="scss">
	%button-shared {
		background: var(--color-box);
		color: var(--color-text);
		border-radius: var(--radius-04);
		border: 1px solid transparent;
	}

	.box-btn-small {
		@extend %button-shared;
		padding: var(--spacing-08) var(--spacing-14);
	}

	.box-btn-medium {
		@extend %button-shared;
		padding: var(--spacing-18);
	}

	.special {
		border-color: var(--color-box);
		height: 100%;
		width: 100%;
		position: relative;
	}

	.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.inverted {
		background: var(--color-background);
	}

	.active {
		border-color: var(--color-accent);
	}
</style>
