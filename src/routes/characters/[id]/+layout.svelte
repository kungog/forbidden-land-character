<script lang="ts">
	import Header from '$layouts/Header.svelte';
	import Container from '$components/Container.svelte';
</script>

<Header />
<main>
	<Container>
		<slot />
	</Container>
</main>

<style>
	main {
		height: var(--body-height-mobile);
	}
</style>
