<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import Box from '$components/Box.svelte';
	import Text from '$components/Text.svelte';
	import Conditions from '$lib/widgets/Conditions.svelte';
	import Consumables from '$lib/widgets/Consumables.svelte';
	import Money from '$lib/widgets/Money.svelte';
	import Points from '$lib/widgets/Points.svelte';
	import Properties from '$lib/widgets/Properties.svelte';

	const { description }: Character = $page.data.character;
	const LABEL = GENERAL_LABELS[$language];
</script>

<div>
	<Box size="small" className="face" handleClick={() => console.log(description)}>
		<Text>{LABEL.face}: {description.face}</Text>
	</Box>
	<Box size="small" className="body" handleClick={() => console.log(description)}>
		<Text>{LABEL.body}: {description.body}</Text>
	</Box>
	<Box size="small" className="cloths" handleClick={() => console.log(description)}>
		<Text>{LABEL.cloths}: {description.cloths}</Text>
	</Box>
	<Box size="small" className="secret" handleClick={() => console.log(description)}>
		<Text>{LABEL.dark_secret}</Text>
		<Text>{description.dark_secret}</Text>
	</Box>
	<Box
		size="small"
		className="misc flex column space-b"
		handleClick={() => console.log(description)}
	>
		<span class="flex space-b">
			<Text selfCenter={false}>{LABEL.reputation}:</Text>
			<Text selfCenter={false}>{description.reputation}</Text>
		</span>
		<span class="flex space-b">
			<Text selfCenter={false}>{LABEL.age}:</Text>
			<Text selfCenter={false}>{description.age}</Text>
		</span>
		<Text selfCenter={false}>{LABEL.pride}: {description.pride}</Text>
	</Box>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-08);
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas:
			'face face misc'
			'body body misc'
			'cloths cloths misc'
			'secret secret secret';
		padding: 0 var(--spacing-10) var(--spacing-24);
		justify-items: stretch;
		min-height: 200px;
	}

	span {
		width: 100%;
	}
</style>
