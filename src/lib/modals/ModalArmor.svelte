<script lang="ts">
	import { page } from '$app/stores';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import GridTemplate from './GridTemplate.svelte';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
	const id = 'update';
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="armor" />
	<GridTemplate>
		<Input iType="text" iLabel={LABEL.helm} iValue={head.name} iFor="head_name" />
		<Input iType="number" iLabel={LABEL.protection} iValue={head.value} iFor="head_value" />
	</GridTemplate>
	<GridTemplate>
		<Input iType="text" iLabel={LABEL.armor} iValue={body.name} iFor="body_name" />
		<Input iType="number" iLabel={LABEL.protection} iValue={body.value} iFor="body_value" />
	</GridTemplate>
	<GridTemplate>
		<Input iType="text" iLabel={LABEL.shield} iValue={shield.name} iFor="shield_name" />
		<Input iType="number" iLabel={LABEL.bonus} iValue={shield.value} iFor="shield_value" />
	</GridTemplate>
</ModalBody>
<ModalFooter action={id} />
