<script lang="ts">
	import Box from '../../Box.svelte';
	import Property from './Parts/Property.svelte';
	export let properties: Character['basic_properties'];
</script>

<div>
	<Box size="medium" handleClick={() => {}}>
		<div class="flex space-b align-c">
			{#each properties as property}
				<Property type={property.id} amount={property.value} />
			{/each}
		</div>
	</Box>
</div>

<style>
	div:has(button) {
		grid-area: properties;
		width: 100%;
	}
</style>
