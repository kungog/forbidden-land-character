<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Condition from './Parts/Condition.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const items = createArrayFromObject(condition);

	const handleConditionModal = () => {
		$modal = {
			type: '',
			id: 'condition'
		};
	};
</script>

<Box size="small" handleClick={() => handleConditionModal()} className="condition">
	<div class="flex space-b align-c">
		<div class="flex align-c">
			{critical ?? '-'}
		</div>
		<div class="flex align-c">
			{#each items as item}
				<Condition type={item.key} isActive={!!item.value} />
			{/each}
		</div>
	</div>
</Box>
