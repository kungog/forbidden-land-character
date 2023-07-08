<script lang="ts">
	import '../reset.css';
	import '../globals.css';
	import Header from '$lib/layouts/Header.svelte';
	import Container from '$lib/components/Container.svelte';
</script>

<Header />
<main>
	<Container>
		<slot />
	</Container>
</main>

<style>
	main {
		padding: calc(var(--body-padding-desktop)) 0;
	}

	@media (max-width: 1200px) {
		main {
			padding: calc(var(--body-padding-mobile)) 0;
		}
	}
</style>
