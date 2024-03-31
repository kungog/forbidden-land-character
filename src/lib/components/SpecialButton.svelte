<script lang="ts">
	export let handleClick: () => void;
</script>

<button on:click={handleClick} type="button">
	<slot />
</button>

<style>
	button {
		padding: 0;
		margin: 0;
		border: 0;

		background-color: transparent;
		font-size: 24px;
		height: 48px;
		border-radius: 4px;
		width: 64px;
		background-color: var(--color-blue);
		position: absolute;
		color: var(--color-white);
	}
</style>
