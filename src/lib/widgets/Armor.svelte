<script lang="ts">
	import { modal, showModal } from '$store';
	import Box from '$components/Box.svelte';
	import HelmetIcon from '$icons/General/HelmetIcon.svelte';
	import BodyIcon from '$icons/General/BodyIcon.svelte';
	import ShieldIcon from '$icons/General/ShieldIcon.svelte';
	import Text from '$components/Text.svelte';
	import type { PageData } from '../../routes/$types';
	export let data: { character: Character; talents: Talent[] } & PageData;
	$: ({
		armor: { head, body, shield }
	} = data.character);

	const iconSize = 22;
</script>

<Box
	className="armor grid align-c"
	handleClick={() => {
		$showModal = true;
		$modal = {
			type: 'armor',
			index: 0
		};
	}}
>
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
