<script lang="ts">
	import { page } from '$app/stores';
	import { modal, showConfirm } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import { emptyTalentObject } from '$lib/helpers/getCharacterObject';
	import ModalBody from '$lib/components/ModalBody.svelte';
	import ModalFooter from '$lib/components/ModalFooter.svelte';
	import FormAttributes from './FormAttributes.svelte';
	import { typeCheckPost } from '$lib/helpers/utilites';
	import Divider from '$lib/components/Divider.svelte';

	const { talents: t }: Character = $page.data.character;
	const dbTalents: Talent[] = $page.data.talents;
	const isUpdate = !typeCheckPost($modal);
	const talent = isUpdate ? t[$modal.index] : emptyTalentObject;
	$: id = $showConfirm ? 'delete' : isUpdate ? 'update' : 'create';
	$: objectKey = isUpdate && !$showConfirm ? `${$modal.key}.${$modal.index}` : 'talents';

	const talentInfo = dbTalents.find((item) => item._id === talent._id) as Talent;
</script>

<ModalBody action="?/{id}" {id}>
	<FormAttributes {objectKey} />
	<Text selfCenter={false} size="small">{talentInfo.description}</Text>
	<Divider />
	<Text selfCenter={false} size="small">Nivå 1: {talentInfo.stages.one}</Text>
	<Divider />
	<Text selfCenter={false} size="small">Nivå 2: {talentInfo.stages.two}</Text>
	<Divider />
	<Text selfCenter={false} size="small">Nivå 3: {talentInfo.stages.three}</Text>
	<Divider />

	<Text selfCenter={false} size="normal">FV</Text>
	<input type="hidden" name="_id" value={talent._id} />
	<RadioButton iValue={talent.value} iFor="value" amount={3} />
</ModalBody>
<ModalFooter action={id} />
