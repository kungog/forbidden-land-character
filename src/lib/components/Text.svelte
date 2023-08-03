<script lang="ts">
	export let size: 'large' | 'medium' | 'normal' | 'small' = 'small',
		bold: boolean = false,
		color: string = 'var(--color-text)';
	const sizes = {
		large: '20px',
		medium: '18px',
		normal: '16px',
		small: '14px'
	};

	$: fontSize = sizes[size];
	$: weightStyle = bold ? '600' : '500';
</script>

<p style="--size: {fontSize}; --weight: {weightStyle}; color: {color};"><slot /></p>

<style>
	p {
		font-size: var(--size);
		font-weight: var(--weight);

		text-align: start;
		align-self: center;
	}
</style>
