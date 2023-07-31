<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Property from './Parts/Property.svelte';
	const { basic_properties: properties }: Character = $page.data.character;
</script>

<Box className="properties" size="medium" handleClick={() => {}}>
	<div class="flex space-b align-c">
		{#each properties as property}
			<Property type={property.id} amount={property.value} />
		{/each}
	</div>
</Box>
