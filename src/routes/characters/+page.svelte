<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import { onMount } from 'svelte';

	let myCharacters: Character[] = [];
	onMount(async () => {
		const response = await fetch(`/api/characters/${localStorage.getItem('passcode')}`);
		const data = await response.json();
		myCharacters = data.characters;
		console.log(myCharacters);
	});
</script>

<div class="main-page center column">
	<h1>Choose your character</h1>
	<Divider />
	<Grid>
		{#each myCharacters as character}
			<a href="/characters/{character._id}">
				<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
			</a>
		{/each}
		<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name="New" />
	</Grid>
</div>
