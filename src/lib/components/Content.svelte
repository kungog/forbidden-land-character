<script lang="ts">
	import { page } from '$app/stores';
	import { getPath } from '$helpers/utilites';
	export let active: boolean = false;

	const pathname = $page.url.pathname;
	const id = $page.data.character._id;
	const path = getPath(pathname, id);
</script>

<div class="flex column" style={active ? `outline-color: var(--color-${path})` : ''}>
	<slot />
</div>

<style>
	div {
		height: calc(100% - 34px - var(--spacing-24) - var(--spacing-20));
		margin-top: var(--spacing-20);
		gap: var(--spacing-12);
		overflow-y: auto;
		padding: var(--spacing-12) var(--spacing-10);
		outline: 1px solid var(--color-box);
		border-radius: 4px;
	}
</style>
