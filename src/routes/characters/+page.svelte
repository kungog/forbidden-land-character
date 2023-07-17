<script lang="ts">
	import { page } from '$app/stores';
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log('DATA ---->', data);
	const characters = data?.characters;
</script>


<div class="main-page center column">
	<h1>
		Choose your character
	</h1>
	<Divider />
	<Grid>
		{#each characters as character}
		<a href="/characters/{character._id}">
			<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
		</a>
	{/each}
		<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name="Example" />
		<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name="Example" />
		<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name="Example" />
	</Grid>
</div>


