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
	import { invalidate } from '$app/navigation';
	import { BASE_URL } from '$helpers/utilites';

	const { condition, critical_injuries: critical }: Character = $page.data.character;
	$: items = createArrayFromObject(condition);
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	let edit = { condition, critical_injuries: critical };

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + $page.data.character._id, {
			method: 'POST',
			body: JSON.stringify({
				...$page.data.character,
				condition: edit.condition,
				critical_injuries: edit.critical_injuries
			})
		});

		showModal = false;
		invalidate('viewed:character');
	};
</script>

{#if showModal && edit}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		<GridTemplate template="1fr">
			<Input
				iType="text"
				iLabel={LABEL.critical}
				bind:iValue={edit.critical_injuries}
				iFor="critical_injuries"
			/>
		</GridTemplate>
		<GridTemplate template="1fr 1fr">
			<BooleanRadio iLabel={LABEL.cooled} bind:iValue={edit.condition.cooled} iFor="cooled" />
			<BooleanRadio iLabel={LABEL.dry} bind:iValue={edit.condition.dry} iFor="dry" />
		</GridTemplate>
		<GridTemplate template="1fr 1fr">
			<BooleanRadio
				iLabel={LABEL.sleepless}
				bind:iValue={edit.condition.sleepless}
				iFor="sleepless"
			/>
			<BooleanRadio iLabel={LABEL.starved} bind:iValue={edit.condition.starved} iFor="starved" />
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
				<Condition type={item.key} isActive={item.value.toString() === 'true'} />
			{/each}
		</div>
	</div>
</Box>
