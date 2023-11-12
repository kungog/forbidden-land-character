<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Input from '$lib/components/Input.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import Text from '$lib/components/Text.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const characters = data?.characters;
	let name = '';
</script>

<div class="add-more">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_439_2)">
			<path
				d="M9.5 9.5V0.5H9.75L10.02 0.554C11.3271 0.815307 12.6729 0.815307 13.98 0.554L14.25 0.5H14.5V9.5H23.5V9.75L23.446 10.02C23.1847 11.3271 23.1847 12.6729 23.446 13.98L23.5 14.25V14.5H14.5V23.5H14.25L13.98 23.446C12.6729 23.1847 11.3271 23.1847 10.02 23.446L9.75 23.5H9.5V14.5H0.5V14.25L0.554 13.98C0.815307 12.6729 0.815307 11.3271 0.554 10.02L0.5 9.75V9.5H9.5Z"
				stroke="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_439_2">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>

<div class="main-page center column">
	<Divider />
	<h1>Characters</h1>
	<Grid>
		{#each characters as character}
			<a href="/characters/{character._id}/base">
				<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
			</a>
		{/each}
	</Grid>

	<Divider />

	<Text size="medium" />
	<form id="create" method="POST">
		<label>
			<Text bold>New character</Text>
			<input bind:value={name} name="passcode" />
		</label>
		<button disabled={name.length <= 2} type="submit">Save</button>
	</form>
</div>

<style lang="scss">
	h1 {
		margin-bottom: var(--spacing-10);
	}
	input {
		margin-top: 12px;
		background: var(--color-box);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		color: var(--color-text);
		width: 100%;
		border-radius: var(--radius-04);
		margin-bottom: var(--spacing-10);

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}
	form > button {
		border: 0;
		padding: var(--spacing-08) var(--spacing-16);
		background: var(--color-active);
		border-radius: var(--radius-04);

		&:not(:last-child) {
			margin-right: var(--spacing-18);
		}

		&:disabled {
			background: var(--color-inactive);
			opacity: 0.8;
			cursor: not-allowed;
		}
	}
</style>
