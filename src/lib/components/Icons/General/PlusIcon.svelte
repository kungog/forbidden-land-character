<script lang="ts">
	export let color = 'var(--color-white)',
		height = 24,
		width = 24;
</script>

<svg {width} {height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_439_2)">
		<path
			d="M9.5 9.5V0.5H9.75L10.02 0.554C11.3271 0.815307 12.6729 0.815307 13.98 0.554L14.25 0.5H14.5V9.5H23.5V9.75L23.446 10.02C23.1847 11.3271 23.1847 12.6729 23.446 13.98L23.5 14.25V14.5H14.5V23.5H14.25L13.98 23.446C12.6729 23.1847 11.3271 23.1847 10.02 23.446L9.75 23.5H9.5V14.5H0.5V14.25L0.554 13.98C0.815307 12.6729 0.815307 11.3271 0.554 10.02L0.5 9.75V9.5H9.5Z"
			stroke={color}
		/>
	</g>
	<defs>
		<clipPath id="clip0_439_2">
			<rect width="24" height="24" fill={color} />
		</clipPath>
	</defs>
</svg>
