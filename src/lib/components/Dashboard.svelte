<script lang="ts">
	import Conditions from './Dashboard/Conditions.svelte';
	import Consumables from './Dashboard/Consumables.svelte';
	import Money from './Dashboard/Money.svelte';
	import Points from './Dashboard/Points.svelte';
	import Properties from './Dashboard/Properties.svelte';

	export let consumables: Character['consumables'],
		properties: Character['basic_properties'],
		condition: Character['condition'],
		critical: Character['critical_injuries'],
		money: Character['money'],
		experience: Character['experience'],
		powerPoints: Character['power_points'];
</script>

<div>
	<Conditions {critical} {condition} />
	<Properties {properties} />
	<Consumables {consumables} />
	<Points {experience} {powerPoints} />
	<Money {money} />
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
	}
</style>
