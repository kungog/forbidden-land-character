<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import Condition from './Parts/Condition.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const items = createArrayFromObject(condition);
</script>

<Box
	size="small"
	className="condition"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'condition',
			index: 0
		};
	}}
>
	<div class="flex space-b align-c">
		<div class="flex align-c">
			{critical ?? '-'}
		</div>
		<div class="flex align-c">
			{#each items as item}
				<Condition type={item.key} isActive={item.value === 'true'} />
			{/each}
		</div>
	</div>
</Box>
