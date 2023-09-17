<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Input from '$lib/components/Input.svelte';
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

	let passcode = generatePassword();
	let oldUserPasscode = '';
	let isOldUser = false;

	onMount(() => {
		if (localStorage && localStorage?.getItem('passcode')) {
			isOldUser = true;
			oldUserPasscode = getOldUserPasscode();
		}
	});

	const handleClick = () => {
		if (localStorage?.getItem('passcode')) return;
		if (isOldUser && oldUserPasscode.length > 0) {
			localStorage.setItem('passcode', oldUserPasscode);
			return;
		}
		localStorage.setItem('passcode', passcode);
	};
</script>

<div class="grid">
	<span />
	<div class="center column">
		<img src="assets/fblands1.png" alt="forbidden-lands-logo" />
		<Divider />
		<div class="center column">
			<h1>Character builder</h1>
			<Divider />
			<Text
				>Forbidden Lands is a fantasy role-playing game published by Free League Publishing in 2018.
				It takes place in a medieval fantasy post-apocalyptic setting, where the destruction has
				limited itself to one kingdom. A fatal mist, which had killed any person venturing outside
				at night, has cleared.</Text
			>
			<Divider />
			<Text>Keep your character online and easier to montior during game time</Text>
			<Text>It tells you how many dices you should use</Text>

			<Button loading={false} handleClick={() => (isOldUser = true)}
				>Old user and have my passcode</Button
			>

			<Divider />

			{#if !isOldUser}
				<Text bold>Passcode</Text>
				<input bind:value={passcode} />
			{/if}

			{#if isOldUser}
				<Text>Welcome back! Your passcode is:</Text>
				<input bind:value={oldUserPasscode} />
			{/if}

			<Divider />

			<a href="/characters" on:click={() => handleClick()}>Continue</a>
		</div>
	</div>
	<span />
</div>

<style lang="scss">
	.grid {
		padding: 0 var(--spacing-16);
		grid-template-columns: 25px 1fr 25px;
		align-items: center;
	}

	img {
		max-width: 300px;
		width: 100%;
	}

	input {
		background: var(--color-background);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		color: var(--color-text);
		width: 100%;
		border-radius: var(--radius-04);

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}

	span {
		font-weight: 700;
	}
</style>
