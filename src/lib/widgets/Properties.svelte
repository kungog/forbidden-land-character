<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import Property from './Parts/Property.svelte';
	const { basic_properties }: Character = $page.data.character;
</script>

<Box
	className="properties"
	size="medium"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'basic_properties',
			index: 0
		};
	}}
>
	<div class="flex space-b align-c">
		{#each basic_properties as property}
			<Property type={property.id} amount={property.value} failure={property.failure} />
		{/each}
	</div>
</Box>
