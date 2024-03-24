<script lang="ts">
	export let size: 'large' | 'medium' | 'normal' | 'small' = 'medium';
	const sizes = {
		large: 'var(--spacing-32)',
		medium: 'var(--spacing-24)',
		normal: 'var(--spacing-16)',
		small: 'var(--spacing-12)'
	};

	$: spacingSize = sizes[size];
</script>

<div style="--size: {spacingSize};" />

<style>
	div {
		padding: var(--size) 0 0 0;
		width: 100%;
	}

	@media (max-width: 1000px) {
		div {
			grid-template-columns: repeat(2, minmax(300px, 300px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}

	@media (max-width: 660px) {
		div {
			grid-template-columns: repeat(1, minmax(300px, 300px));
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
			overflow-x: auto;
		}
	}
</style>
