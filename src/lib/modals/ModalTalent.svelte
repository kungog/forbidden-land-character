<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$store';
	import Text from '$components/Text.svelte';
	import RadioButton from '$components/RadioButton.svelte';
	import ModalBody from '$components/ModalBody.svelte';
	import ModalFooter from '$components/ModalFooter.svelte';
	import Divider from '$components/Divider.svelte';

	const { talents: t }: Character = $page.data.character;
	const dbTalents: Talent[] = $page.data.talents;
	const talent = t[$modal.index];

	const talentInfo = dbTalents.find((item) => item._id === talent._id) as Talent;
</script>

<ModalBody>
	<Text selfCenter={false} size="small">{talentInfo.description}</Text>
	<Divider size="small" />
	<Text selfCenter={false} size="small">Nivå 1: {talentInfo.stages.one}</Text>
	<Divider size="small" />
	<Text selfCenter={false} size="small">Nivå 2: {talentInfo.stages.two}</Text>
	<Divider size="small" />
	<Text selfCenter={false} size="small">Nivå 3: {talentInfo.stages.three}</Text>
	<Divider size="small" />

	<Text selfCenter={false} size="normal">FV</Text>
	<input type="hidden" name="_id" value={talent._id} />
	<RadioButton iValue={talent.value} iFor="value" amount={3} />
</ModalBody>
<ModalFooter />
