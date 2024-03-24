<script lang="ts">
	import Container from '$components/Container.svelte';
</script>

<main>
	<Container>
		<slot />
	</Container>
</main>

<style>
	main {
		height: var(--main-height);
		background: var(--color-background);
	}
</style>
