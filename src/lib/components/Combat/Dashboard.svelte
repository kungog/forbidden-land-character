<script lang="ts">
	import Conditions from '$lib/widgets/Conditions.svelte';
	import Arrows from '$lib/widgets/Arrows.svelte';
	import Weapons from '$lib/widgets/Weapons.svelte';
	import Points from '$lib/widgets/Points.svelte';
	import Armor from '$lib/widgets/Armor.svelte';
</script>

<div>
	<Conditions />
	<Weapons />
	<Armor />
	<Arrows />
	<Points gridLayout />
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
