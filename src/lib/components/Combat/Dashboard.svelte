<script lang="ts">
	import Armor from './Dashboard/Armor.svelte';
	import Conditions from './Dashboard/Conditions.svelte';
	import Misc from './Dashboard/Misc.svelte';
	import Weapons from './Dashboard/Weapons.svelte';
</script>

<div>
	<Conditions />
	<Weapons />
	<Armor />
	<Misc />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas:
			'condition condition condition condition condition'
			'misc misc weapons weapons weapons'
			'armor armor weapons weapons weapons'
			'armor armor weapons weapons weapons';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
	}
</style>
