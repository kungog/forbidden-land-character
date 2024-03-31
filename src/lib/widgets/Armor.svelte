<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import { language } from '$store';
	import Box from '$components/Box.svelte';
	import HelmetIcon from '$icons/General/HelmetIcon.svelte';
	import BodyIcon from '$icons/General/BodyIcon.svelte';
	import ShieldIcon from '$icons/General/ShieldIcon.svelte';
	import Text from '$components/Text.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({
		armor: { head, body, shield }
	} = data.character);

	const iconSize = 22;
	const LABEL = GENERAL_LABELS[$language];

	let showModal = false;
	$: edit = { head, body, shield };
</script>

{#if showModal && edit}
	<Modal handleClose={() => (showModal = false)} handleRemove={() => console.log('Delete: ', edit)}>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.helm} iValue={edit.head.name} iFor="head_name" />
			<Input iType="number" iLabel={LABEL.protection} iValue={edit.head.value} iFor="head_value" />
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.armor} iValue={edit.body.name} iFor="body_name" />
			<Input iType="number" iLabel={LABEL.protection} iValue={edit.body.value} iFor="body_value" />
		</GridTemplate>
		<GridTemplate>
			<Input iType="text" iLabel={LABEL.shield} iValue={edit.shield.name} iFor="shield_name" />
			<Input iType="number" iLabel={LABEL.bonus} iValue={edit.shield.value} iFor="shield_value" />
		</GridTemplate>
	</Modal>
{/if}

<Box className="armor grid align-c" handleClick={() => (showModal = true)}>
	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={HelmetIcon} height={iconSize} width={iconSize} />

			<Text>{head.name ?? '-'}</Text>
		</div>
		<Text size="normal">{head.value ?? 0}</Text>
	</div>

	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={BodyIcon} height={iconSize} width={iconSize} />
			<Text>{body.name ?? '-'}</Text>
		</div>
		<Text size="normal">{body.value ?? 0}</Text>
	</div>

	<div class="flex space-b">
		<div class="flex align-c">
			<svelte:component this={ShieldIcon} height={iconSize} width={iconSize} />
			<Text>{shield.name ?? '-'}</Text>
		</div>
		<Text size="normal">{shield.value ?? 0}</Text>
	</div>
</Box>

<style lang="scss">
	.flex.align-c {
		gap: var(--spacing-10);
	}
</style>
