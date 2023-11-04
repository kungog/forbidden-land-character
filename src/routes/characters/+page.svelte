<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Input from '$lib/components/Input.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import Text from '$lib/components/Text.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const characters = data?.characters;
</script>

<div class="main-page center column">
	<h1>Choose your character</h1>
	<Divider />
	<Grid>
		{#each characters as character}
			<a href="/characters/{character._id}/base">
				<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
			</a>
		{/each}
	</Grid>

	<Divider />
	<Text size="medium">Create new</Text>
	<form id="create" method="POST">
		<Input iType="text" iLabel="Character name" iFor="name" />
	</form>
	<button type="submit" form="create">Save</button>
</div>

<style lang="scss">
	%shared-button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
	}
	button {
		@extend %shared-button;
		font-size: 20px;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
