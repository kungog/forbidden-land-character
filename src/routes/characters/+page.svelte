<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log('DATA ---->', data);
	const characters = data?.characters;
</script>


<h1>This is the your character</h1>
<div>
	{#each characters as character}
		<a href="/characters/{character._id}">
			<p>{character.name}</p> 
		</a>
	{/each}
</div>


