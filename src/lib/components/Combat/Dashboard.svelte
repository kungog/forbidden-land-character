<script lang="ts">
</script>

<div>Combat</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			'condition condition condition condition'
			'properties properties consumables consumables'
			'points points money money';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
	}
</style>
