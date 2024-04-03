<script lang="ts">
	export let color = 'var(--color-white)',
		height = 32,
		width = 32;
</script>

<svg {width} {height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M20.834 8.03711L9.64 14.5001C8.21 15.3241 8.21 16.6751 9.64 17.5001L20.834 23.9631C22.264 24.7891 23.432 24.1131 23.432 22.4631V9.53711C23.432 7.88711 22.262 7.21111 20.834 8.03711Z"
		fill={color}
	/>
</svg>

<style>
	svg {
		transform: translateX(-3px);
	}
</style>
