<script lang="ts">
	export let handleClick: any;
</script>

<button on:click={handleClick} />

<style lang="scss">
	button {
		position: absolute;
		border: none;
		padding: 0;
		margin: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 20%);
		backdrop-filter: blur(2px);
		z-index: 10;
		top: 0;
	}
</style>
