<script lang="ts">
	export let size: 'large' | 'medium' | 'normal' | 'small' = 'small',
		bold: boolean = false,
		textCenter: boolean = false,
		selfCenter: boolean = true,
		color: string = 'var(--color-text)',
		style: string = '';
	const sizes = {
		large: '20px',
		medium: '18px',
		normal: '16px',
		small: '14px'
	};

	$: fontSize = sizes[size];
	$: weightStyle = bold ? '600' : '500';
	$: textStyle = textCenter ? 'center' : 'start';
	$: selfStyle = selfCenter ? 'center' : 'initial';
</script>

<p
	style="--align: {selfStyle}; --text: {textStyle};  --size: {fontSize}; --weight: {weightStyle}; color: {color}; {style}"
>
	<slot />
</p>

<style>
	p {
		font-size: var(--size);
		font-weight: var(--weight);

		text-align: var(--text);
		align-self: var(--align);
		letter-spacing: normal;
	}
</style>
