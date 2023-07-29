<script lang="ts">
	import Conditions from './Dashboard/Conditions.svelte';
	import Consumables from './Dashboard/Consumables.svelte';
	import Money from './Dashboard/Money.svelte';
	import Points from './Dashboard/Points.svelte';
	import Properties from './Dashboard/Properties.svelte';
</script>

<div>
	<Conditions />
	<Properties />
	<Consumables />
	<Points />
	<Money />
</div>

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
	}
</style>
