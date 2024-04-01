<script lang="ts">
	import Grid from '$components/Grid.svelte';
	import Input from '$components/Input.svelte';
	import Overlay from '$components/Overlay.svelte';
	import PickCharacter from '$components/PickCharacter.svelte';
	import PlusIcon from '$icons/General/PlusIcon.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const characters = data?.characters;
	let name = '';
	let showModal = false;
</script>

<button on:click={() => (showModal = true)} class="add-more">
	<PlusIcon />
</button>

<div class="main-page center column">
	<h1>Characters</h1>
	<Grid>
		{#each characters as character}
			<a href="/characters/{character._id}">
				<PickCharacter image="/assets/forbidden-lands-placeholder.jpeg" name={character.name} />
			</a>
		{/each}
	</Grid>
</div>

{#if showModal}
	<Overlay handleClick={() => (showModal = false)} />
	<dialog>
		<section>
			<form id="create" method="POST">
				<Input bind:iValue={name} iType="text" iFor="name" iLabel="New character name" />
				<button disabled={name.length <= 2} type="submit">Save</button>
			</form>
		</section>
	</dialog>
{/if}

<style>
	.main-page {
		padding: var(--spacing-48) 0;
	}

	.add-more {
		position: absolute;
		right: 12px;
		top: 12px;
		height: auto;
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
	}

	dialog {
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: 0;
		pointer-events: none;
		padding: 0;
	}

	section {
		position: relative;
		z-index: 101;
		min-height: 10%;
		width: 90%;
		background: var(--color-box);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
		pointer-events: initial;
	}

	h1 {
		margin-bottom: var(--spacing-10);
	}

	form > button {
		border: 0;
		padding: var(--spacing-08) var(--spacing-16);
		background: var(--color-active);
		border-radius: var(--radius-04);
		margin-top: var(--spacing-10);

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
