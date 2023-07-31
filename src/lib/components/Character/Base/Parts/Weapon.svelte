<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	export let additionals: string, bonus: string, damage: string, range: string, type: string;

	const LABELS = GENERAL_LABELS[$language];
</script>

<div class="upper-part">
	<div class="flex space-b">
		<Text size="normal">{type}</Text>
		<Text>{additionals ?? ''}</Text>
	</div>

	<div class="flex stats">
		<Text>{LABELS['bonus']}: {bonus}</Text>
		<Text>{LABELS['damage']}: {damage}</Text>
		<Text>{LABELS['range']}: {range.toLocaleLowerCase()}</Text>
	</div>
</div>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
</style>
