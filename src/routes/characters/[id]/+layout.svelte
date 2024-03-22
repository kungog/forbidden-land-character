<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import Modals from '$lib/layouts/Modals.svelte';
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
