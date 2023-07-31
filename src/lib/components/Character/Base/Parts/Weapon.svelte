<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import { language } from '$lib/store';
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	export let additionals: string, bonus: string, damage: string, range: string, type: string;

	const LABELS = GENERAL_LABELS[$language];
</script>

<div class="weapon">
	<div class="flex space-b">
		<Text size="small">{type}</Text>
		<Text size="small">{additionals ?? ''}</Text>
	</div>

	<div class="flex stats">
		<Text size="small">{LABELS['bonus']}: {bonus}</Text>
		<Text size="small">{LABELS['damage']}: {damage}</Text>
		<Text size="small">{LABELS['range']}: {range.toLocaleLowerCase()}</Text>
	</div>
</div>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
	.weapon > :first-child {
		margin-bottom: 10px;
	}
</style>
