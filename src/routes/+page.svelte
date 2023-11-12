<script lang="ts">
	import { enhance } from '$app/forms';
	import Divider from '$lib/components/Divider.svelte';
	import Text from '$lib/components/Text.svelte';
	import { onMount } from 'svelte';

	const generatePassword = () => {
		let length = 20,
			charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
			retVal = '';
		for (let i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		return retVal;
	};

	const getOldUserPasscode = () => {
		if (!localStorage) return '';
		let passcode = localStorage?.getItem('passcode');
		return passcode && passcode.length > 0 ? passcode : '';
	};

	let passcode = '';

	onMount(() => {
		if (localStorage && localStorage?.getItem('passcode')) {
			passcode = getOldUserPasscode();
		}
	});

	const handleClick = () => {
		localStorage.setItem('passcode', passcode);
	};
</script>

<div class="grid">
	<div class="flex column align-c">
		<Divider />
		<img src="assets/fblands1.png" alt="forbidden-lands-logo" />
		<Divider />
		<Divider />
		<h1>Character builder</h1>
		<Text size="small">
			Keep track on your character online with this tool that keeps it digital. Here you can get
			your dices, add new talents, add weapons and a lot more.
		</Text>

		<Divider />
		<Divider />
		<form class="center column" method="post" use:enhance>
			<label>
				<Text bold>Your passcode</Text>
				<input bind:value={passcode} name="passcode" />
			</label>

			<button disabled={passcode.length <= 5} type="submit" on:click={handleClick}>Continue</button>
		</form>
		<Divider />
		<div class="flex generate-code-container">
			<p>Don't have code?</p>
			<button on:click={() => (passcode = generatePassword())}> Generate passcode </button>
		</div>
	</div>
</div>

<style lang="scss">
	.grid {
		padding: 0 var(--spacing-16);
		grid-template-columns: 25px 1fr 25px;
		height: 100vh;

		> div {
			grid-column-start: 2;
		}
	}

	img {
		max-width: 300px;
		width: 100%;
	}

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

	.generate-code-container {
		gap: var(--spacing-06);

		p {
			font-size: 12px;
			font-weight: normal;
		}

		button {
			background: transparent;
			border: 0;
			padding: 0;
			font-size: 12px;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
