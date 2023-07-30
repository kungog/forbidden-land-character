<script lang="ts">
	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import createArrayFromObject from '$lib/helpers/getObjectKeys';
	import Skill from './Parts/Skill.svelte';

	const { skills }: Character = $page.data.character;

	const items = createArrayFromObject(skills);
</script>

<div>
	<div class="flex space-b">
		<Text>Färdigheter</Text>
		<button on:click={() => console.log('click')}>ikon</button>
	</div>
	<div class="skills">
		{#each items as item}
			<Skill skill={item.key} value={item.value} />
		{/each}
	</div>
</div>

<style lang="scss">
	.skills {
		height: calc(100vh - var(--body-height-mobile) - 200px - 32px);
		overflow: auto;
		padding: var(--spacing-10) var(--spacing-15) var(--spacing-20) 0;
	}

	.space-b {
		padding: 0 var(--spacing-15) var(--spacing-10) 0;
	}
</style>
