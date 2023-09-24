<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import { emptyTalentObject } from '$lib/helpers/getCharacterObject';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';

	const { talents }: Character = $page.data.character;

	const isUpdate = !typeCheckPost($modal);
	let talent = isUpdate
		? talents.find((talent) => talent.id === $modal?.talentId) ?? emptyTalentObject
		: emptyTalentObject;
	const id = isUpdate ? 'update' : 'create';

	// FIXME
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes objectKey="talents" />
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={talent.value} iFor={$modal?.talentId ?? ''} amount={3} />
</ModalBody>
<ModalFooter action={id} />
