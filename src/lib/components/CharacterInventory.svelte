<script lang="ts">
	export let armor: Character['armor'],
		animals: Character['animals'],
		notes: Character['notes'],
		inventory: Character['inventory'],
		relations: Character['relations'],
		skills: Character['skills'],
		talents: Character['talents'],
		weapons: Character['weapons'];
</script>

<div />

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
