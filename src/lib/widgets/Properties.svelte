<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Property from './Parts/Property.svelte';

	const { basic_properties: properties }: Character = $page.data.character;
	const handlePropertiesModal = () => {
		$modal = {
			type: '',
			id: 'properties'
		};
	};
</script>

<Box className="properties" size="medium" handleClick={() => handlePropertiesModal()}>
	<div class="flex space-b align-c">
		{#each properties as property}
			<Property type={property.id} amount={property.value} failure={property.failure} />
		{/each}
	</div>
</Box>
