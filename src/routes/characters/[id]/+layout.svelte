<script lang="ts">
	import Header from '$layouts/Header.svelte';
	import Container from '$components/Container.svelte';
	import Modals from '$layouts/Modals.svelte';
</script>

<Header />
<main>
	<Container>
		<slot />
	</Container>
</main>
<Modals />

<style>
	main {
		height: var(--body-height-mobile);
	}
</style>
