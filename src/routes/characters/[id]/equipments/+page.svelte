<script lang="ts">
	import type { PageData } from './$types';
	import { modal, showModal, language } from '$lib/store';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import BodyIcon from '$icons/General/BodyIcon.svelte';
	import HelmetIcon from '$icons/General/HelmetIcon.svelte';
	import ShieldIcon from '$icons/General/ShieldIcon.svelte';
	import { BASE_LABELS } from '$helpers/constants/languages';
	import CategoryPage from '$components/CategoryPage.svelte';
	import Content from '$components/Content.svelte';
	import Divider from '$components/Divider.svelte';

	export let data: PageData;
	const {
		armor: { head, body, shield }
	}: Character = data.character;

	const handleArmor = () => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'armor',
			index: 0,
			value: { head, body, shield }
		};
	};
</script>

<CategoryPage>
	<h1>{BASE_LABELS[$language].armor}</h1>
	<Content active>
		<Box handleClick={() => handleArmor()}>
			<div class="flex equipment">
				<div class="flex">
					<HelmetIcon />
					<Text size="normal">{head.name ?? '-'}</Text>
				</div>
				<Text>{head.value ?? 0}</Text>
			</div>
			<div class="flex equipment">
				<div class="flex">
					<BodyIcon />
					<Text size="normal">{body.name ?? '-'}</Text>
				</div>
				<Text>{body.value ?? 0}</Text>
			</div>
			<div class="flex equipment">
				<div class="flex">
					<ShieldIcon />
					<Text size="normal">{shield.name ?? '-'}</Text>
				</div>
				<Text>{shield.value ?? 0}</Text>
			</div>
		</Box>
	</Content>
</CategoryPage>

<style lang="scss">
	div {
		&.equipment:not(:last-child) {
			margin-bottom: var(--spacing-10);
		}

		> div {
			gap: var(--spacing-10);
			&:first-child {
				margin-right: auto;
			}
		}
	}
</style>
