<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Equipment from '$lib/components/Base/Parts/Equipment.svelte';
	import HelmetIcon from '$lib/components/Icons/General/HelmetIcon.svelte';
	import BodyIcon from '$lib/components/Icons/General/BodyIcon.svelte';
	import ShieldIcon from '$lib/components/Icons/General/ShieldIcon.svelte';
	import Text from '$lib/components/Text.svelte';
	import Divider from '$lib/components/Divider.svelte';

	const {
		armor: { head, body, shield }
	}: Character = $page.data.character;

	const handleArmor = () => {
		$modal = {
			type: null,
			id: 'armor'
		};
	};
</script>

<Box className="armor" handleClick={() => handleArmor()}>
	<div class="flex column">
		<div class="flex space-b">
			<div class="flex column">
				<svelte:component this={HelmetIcon} />

				<Text size="normal">{head.name ?? '-'}</Text>
			</div>
			<Text>{head.value ?? 0}</Text>
		</div>

		<div class="flex space-b">
			<div class="flex column">
				<svelte:component this={BodyIcon} />
				<Text size="normal">{body.name ?? '-'}</Text>
			</div>
			<Text>{body.value ?? 0}</Text>
		</div>

		<div class="flex space-b">
			<div class="flex column">
				<svelte:component this={ShieldIcon} />
				<Text size="normal">{shield.name ?? '-'}</Text>
			</div>
			<Text>{shield.value ?? 0}</Text>
		</div>
	</div>
</Box>

<style lang="scss">
	.space-b:not(:last-child) {
		margin-bottom: var(--spacing-20);

		> .column {
			gap: var(--spacing-10);
		}
	}
</style>
