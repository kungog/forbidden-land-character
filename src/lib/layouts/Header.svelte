<script lang="ts">
	import Container from "$lib/components/Container.svelte";

</script>

<header>
	<Container>
		<a href="/">
			<img src="/assets/forbidden-lands-logo.png" alt="forbidden-lands-logo">
		</a>
	</Container>
</header>

<style style="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height-desktop);
		position: fixed;
		width: 100%;
		backdrop-filter: blur(8px);
    z-index: var(--index-header);
	}

	a {
		display: flex;

		&:not(:last-child) {
			margin-right: 12px;
		}
	}

	img {
		width: 100px;
	}

	@media (max-width: 1200px) {
		header {
			height: var(--header-height-mobile);
		}
  }
</style>
