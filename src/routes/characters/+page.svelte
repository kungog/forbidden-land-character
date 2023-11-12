<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import Input from '$lib/components/Input.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import PickCharacter from '$lib/components/PickCharacter.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const characters = data?.characters;
	let name = '';
	let showModal = false;
</script>

<button on:click={() => (showModal = true)} class="add-more">
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
</button>

<div class="main-page center column">
	<h1>Characters</h1>
	<Grid>
		{#each characters as character}
			<a href="/characters/{character._id}/base">
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

<style lang="scss">
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
