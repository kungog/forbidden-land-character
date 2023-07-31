<script lang="ts">
	import { page } from '$app/stores';
	import { BASE_LABELS } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import Equipment from './Parts/Equipment.svelte';
	import Weapon from './Parts/Weapon.svelte';

	const {
		armor: { head, body, shield },
		weapons
	}: Character = $page.data.character;
	const LABELS = BASE_LABELS[$language];
</script>

<div>
	<Box handleClick={() => {}}>
		<Equipment {...head} icon="head" />
		<Equipment {...body} icon="body" />
		<Equipment {...shield} icon="shield" />
	</Box>
</div>
<div class="flex space-b">
	<Text>{LABELS['weapons']}</Text>
	<button on:click={() => console.log('click')}>ikon</button>
</div>
<div>
	{#each weapons as weapon}
		<Box handleClick={() => {}}>
			<Weapon {...weapon} />
		</Box>
	{/each}
</div>

<style lang="scss">
	div:not(:last-child) {
		margin-bottom: var(--spacing-10);
	}
</style>
