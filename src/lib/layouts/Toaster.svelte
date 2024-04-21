<script lang="ts">
	import { fade } from 'svelte/transition';
	import { showToaster } from '$lib/store';

	const backgroundColor = {
		success: '--color-success',
		error: '--color-error'
	};

	const fallbackText = {
		success: 'Successfull',
		error: 'Error'
	};

	$: if ($showToaster) {
		setTimeout(() => ($showToaster = null), $showToaster.timeout);
	}
</script>

{#if $showToaster}
	<div
		transition:fade
		style={`background-color: var(${backgroundColor[$showToaster.type] ?? '--color-warning'})`}
	>
		{$showToaster.text ?? fallbackText[$showToaster.type]}
	</div>
{/if}

<style>
	div {
		position: absolute;
		top: var(--spacing-16);
		right: var(--spacing-16);
		padding: 20px;
		border-radius: var(--radius-04);
		z-index: var(--index-toaster);
		width: calc(100% - var(--spacing-16) * 2);
	}
</style>
