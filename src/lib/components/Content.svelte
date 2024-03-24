<div class="flex column">
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
