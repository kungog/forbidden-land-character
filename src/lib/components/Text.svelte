<script lang="ts">
	export let size: 'large' | 'medium' | 'normal' | 'small' = 'normal',
		bold: boolean = false;

	const sizes = {
		large: '24px',
		medium: '20px',
		normal: '18px',
		small: '16px'
	};

	$: fontSize = sizes[size];
	$: weightStyle = bold ? '600' : '500';
</script>

<p style="--size: {fontSize}; --weight: {weightStyle};"><slot /></p>

<style>
	p {
		font-size: var(--size);
		font-weight: var(--weight);
		text-align: start;
		align-self: center;
	}
</style>
