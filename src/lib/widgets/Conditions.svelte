<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$components/Box.svelte';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import createArrayFromObject from '$helpers/getObjectKeys';
	import Condition from './Parts/Condition.svelte';
	import Modal from '$components/Modal.svelte';
	import BooleanRadio from '$components/BooleanRadio.svelte';
	import Input from '$components/Input.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	const items = createArrayFromObject(condition);
	const LABEL = GENERAL_LABELS[$language];
	let showModal = false;
	$: edit = { condition, critical_injuries: critical };
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.critical} iValue={critical} iFor="critical_injuries" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr">
			<BooleanRadio iLabel={LABEL.cooled} iValue={condition.cooled} iFor="cooled" />
			<BooleanRadio iLabel={LABEL.dry} iValue={condition.dry} iFor="dry" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr">
			<BooleanRadio iLabel={LABEL.sleepless} iValue={condition.sleepless} iFor="sleepless" />
			<BooleanRadio iLabel={LABEL.starved} iValue={condition.starved} iFor="starved" />
		</GridTemplate>
	</Modal>
{/if}

<Box size="small" className="condition" handleClick={() => (showModal = true)}>
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
