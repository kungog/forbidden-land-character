<script lang="ts">
	import Dice from './Dice.svelte';

	export let property: number | null, skill: number | null, attack: number | null;

	const showProperty = typeof property === 'number';
	const showSkill = typeof skill === 'number';
	const showAttack = typeof attack === 'number' || typeof attack === 'string';
</script>

<div>
	{#if showProperty && property && property > 0}
		<Dice type="property" amount={property} />
	{/if}
	{#if showSkill && skill && skill > 0}
		<Dice type="skill" amount={skill} />
	{/if}
	{#if showAttack && attack && attack > 0}
		<Dice type="attack" amount={attack} />
	{/if}
</div>

<style>
	div {
		display: flex;
		gap: var(--spacing-10);
	}
</style>
