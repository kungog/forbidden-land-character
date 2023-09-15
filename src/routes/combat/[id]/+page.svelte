<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '$lib/components/Combat/Dashboard.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	import Base from '$lib/components/Combat/Base.svelte';
	export let data: PageData;
	console.log('DATA ---->', data.character);
</script>

<Dashboard />
<div>
	<Menu combat />
	<Base />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: calc(100vw - var(--spacing-18) - 80%) calc(
				100vw - var(--spacing-18) - 20%
			);
		height: calc(var(--body-height-mobile) - 200px);
		gap: var(--spacing-18);
	}
</style>
