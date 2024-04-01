<script lang="ts">
	import { page } from '$app/stores';
	import { getPath } from '$helpers/utilites';
	export let active = false,
		empty = false,
		label = '';

	const pathname = $page.url.pathname;
	const id = $page.data.character._id;
	const path = getPath(pathname, id);
</script>

<div class="flex column" style={active ? `outline-color: var(--color-${path})` : ''}>
	<slot />
	{#if empty}
		<h5 class="center">{label}</h5>
	{/if}
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
		position: relative;
	}

	h5 {
		position: absolute;
		pointer-events: none;
		user-select: none;
		left: 50%;
		transform: translate(-50%, 0);
		width: 80%;
		height: 100%;
		top: 0;
		font-size: 49px;
		color: var(--color-box);
		font-weight: bold;
		text-align: center;
	}
</style>
