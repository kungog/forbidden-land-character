<script lang="ts">
	import type { PageData } from './$types';
	import { language } from '$lib/store';
	import { modal, showModal } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import { GENERAL_LABELS, BASE_LABELS } from '$lib/helpers/constants/languages';

	export let data: PageData;
	const { weapons }: Character = data.character;

	const handleWeaponModal = (index: number) => {
		$showModal = true;
		$modal = {
			id: data.character._id,
			type: 'PUT',
			key: 'weapons',
			index: index,
			value: weapons[index]
		};
	};

	const LABEL = GENERAL_LABELS[$language];
</script>

<div class="flex justify-c">
	<h1>{BASE_LABELS[$language].weapons}</h1>
</div>

<section class="flex column">
	{#each weapons as weapon, index}
		<Box handleClick={() => handleWeaponModal(index)}>
			<div class="upper-part">
				<div class="flex space-b">
					<Text size="normal">{weapon.type}</Text>
					<Text>{weapon.additionals ?? ''}</Text>
				</div>

				<div class="flex stats">
					<Text>{LABEL['bonus']}: {weapon.bonus}</Text>
					<Text>{LABEL['damage']}: {weapon.damage}</Text>
					<Text>{LABEL['range']}: {weapon.range.toLocaleLowerCase()}</Text>
				</div>
			</div>
		</Box>
	{/each}
</section>

<style lang="scss">
	section {
		margin: 0 var(--spacing-16);
		gap: var(--spacing-10);
	}

	h1 {
		margin-bottom: var(--spacing-16);
	}

	.stats {
		gap: var(--spacing-18);
	}
</style>
