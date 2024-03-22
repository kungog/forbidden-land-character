<script lang="ts">
	import type { PageData } from './$types';
	import { modal, showModal, language } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import BodyIcon from '$lib/components/Icons/General/BodyIcon.svelte';
	import HelmetIcon from '$lib/components/Icons/General/HelmetIcon.svelte';
	import ShieldIcon from '$lib/components/Icons/General/ShieldIcon.svelte';
	import { BASE_LABELS } from '$lib/helpers/constants/languages';

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

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].armor}</h1>
</div>

<section class="flex column">
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
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}

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
