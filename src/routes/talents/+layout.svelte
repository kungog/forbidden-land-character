<script lang="ts">
	import Container from '$lib/components/Container.svelte';
</script>

<main>
	<Container>
		<slot />
	</Container>
</main>

<style>
	main {
		height: var(--main-height);
		background: var(--color-box);
	}
</style>
