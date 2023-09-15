<script lang="ts">
	import Armor from './Dashboard/Armor.svelte';
	import Conditions from './Dashboard/Conditions.svelte';
	import Arrows from './Dashboard/Arrows.svelte';
	import Weapons from './Dashboard/Weapons.svelte';
	import Points from './Dashboard/Points.svelte';
</script>

<div>
	<Conditions />
	<Weapons />
	<Armor />
	<Arrows />
	<Points />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas:
			'condition condition condition condition condition'
			'arrows points weapons weapons weapons'
			'armor armor weapons weapons weapons'
			'armor armor weapons weapons weapons';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
	}
</style>
