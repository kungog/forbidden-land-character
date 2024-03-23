<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import Divider from '$components/Divider.svelte';
	import Overlay from '$components/Overlay.svelte';
	import Text from '$components/Text.svelte';
	import { language } from '$lib/store';
	import { BASE_LABELS, GENERAL_LABELS } from '$helpers/constants/languages';

	let showModal = false;
	$: activeLang = $language;

	const MAIN_LANGUAGES: [{ lang: 'sv'; text: 'Svenska' }, { lang: 'en'; text: 'English' }] = [
		{ lang: 'sv', text: 'Svenska' },
		{ lang: 'en', text: 'English' }
	];

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

	const handleOnChange = (lang: 'sv' | 'en') => ($language = lang);
</script>

<button on:click={() => (showModal = true)} class="settings">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11.0097 0.880371C9.78688 0.991324 8.59297 1.28162 7.49994 1.76078C8.22041 3.29654 8.1666 4.88762 7.18494 5.62361C6.2083 6.35565 4.65111 5.99696 3.38225 4.88814C2.62072 5.79995 2.00713 6.82689 1.55999 7.96436C3.14577 8.54246 4.21475 9.7299 4.04155 10.9409C3.86821 12.1519 2.50888 12.9912 0.824707 13.1016C0.934301 14.3108 1.24236 15.4818 1.71238 16.5645C2.54722 16.1809 3.39018 16.0446 4.10746 16.1455C4.71833 16.2332 5.22903 16.4743 5.56789 16.9263C6.30932 17.9152 5.92428 19.491 4.78133 20.7686C5.69614 21.535 6.76021 22.1488 7.90293 22.5982C8.48089 21.0125 9.668 19.9434 10.8795 20.1167C12.0909 20.29 12.9298 21.6493 13.0401 23.3335C14.263 23.2226 15.4569 22.9325 16.5499 22.4532C15.8109 20.9064 15.8815 19.285 16.8707 18.5435C17.3225 18.2046 17.9285 18.1206 18.5391 18.2095C19.2475 18.3108 20.0012 18.69 20.6749 19.2774C21.429 18.3706 22.053 17.3316 22.4972 16.2026C20.9114 15.6246 19.8424 14.4377 20.0157 13.2261C20.189 12.0145 21.5469 11.1743 23.231 11.064C23.1204 9.84784 22.8198 8.68914 22.3448 7.60112C20.8161 8.30973 19.2201 8.21729 18.4879 7.24079C17.7521 6.25904 18.1479 4.71611 19.2701 3.44392C18.3551 2.67742 17.2897 2.06359 16.1471 1.61429C15.569 3.19998 14.3819 4.27023 13.1705 4.09717C11.959 3.92406 11.12 2.56454 11.0098 0.880371H11.0097ZM12.0248 5.3394C15.7573 5.3394 18.7925 8.37465 18.7925 12.107C18.7925 15.8394 15.7573 18.8746 12.0249 18.8746C8.2925 18.8746 5.25735 15.8394 5.25735 12.107C5.25735 8.37465 8.2925 5.3395 12.0249 5.3395L12.0248 5.3394ZM12.0248 6.2154C8.76589 6.2154 6.1333 8.848 6.1333 12.107C6.1333 15.366 8.76589 17.9987 12.0249 17.9987C15.2839 17.9987 17.9166 15.366 17.9166 12.107C17.9166 8.84814 15.2839 6.21545 12.0249 6.21545L12.0248 6.2154ZM12.0264 6.92439C14.8902 6.92439 17.2119 9.2461 17.2119 12.1099C17.2119 14.9737 14.8902 17.2954 12.0264 17.2954C9.16255 17.2954 6.84083 14.9737 6.84083 12.1098C6.84083 9.24601 9.16255 6.92429 12.0264 6.92429V6.92439Z"
			fill="white"
		/>
	</svg>
</button>

{#if showModal}
	<Overlay handleClick={() => (showModal = false)} />
	<dialog>
		<section>
			<Text size="large">{GENERAL_LABELS[$language].pick_language}:</Text>
			<div>
				{#each MAIN_LANGUAGES as language}
					<label class="container">
						{language.text}
						<input
							type="radio"
							checked={language.lang === activeLang}
							on:change={() => handleOnChange(language.lang)}
							name="radio"
						/>
						<span class="checkmark" />
					</label>
				{/each}
			</div>
		</section>
	</dialog>
{/if}

<div class="grid">
	<div class="flex column align-c">
		<Divider />
		<img src="assets/fblands1.png" alt="forbidden-lands-logo" />
		<Divider />
		<Divider />
		<h1>{GENERAL_LABELS[$language].character_build}</h1>
		<Text size="small">
			{GENERAL_LABELS[$language].info_text}
		</Text>

		<Divider />
		<Divider />
		<form class="center column" method="post" use:enhance>
			<label>
				<Text bold>{GENERAL_LABELS[$language].your_passcode}</Text>
				<input bind:value={passcode} name="passcode" />
			</label>

			<button disabled={passcode.length <= 5} type="submit" on:click={handleClick}
				>{GENERAL_LABELS[$language].continue}</button
			>
		</form>
		<Divider />
		<div class="flex generate-code-container">
			<p>{GENERAL_LABELS[$language].no_code}</p>
			<button on:click={() => (passcode = generatePassword())}>
				{GENERAL_LABELS[$language].generate}
			</button>
		</div>
		<Divider />
		<div class="go-to-links">
			<a href="/talents">
				<Text size="large">
					{BASE_LABELS[$language].talents}
				</Text>
			</a>
			<a href="/talents">
				<Text size="large">
					{GENERAL_LABELS[$language].task_board}
				</Text>
			</a>
		</div>
		<Divider size="small" />
	</div>
</div>

<style lang="scss">
	.settings {
		background: transparent;
		border: 0;
		outline: 0;
		position: absolute;
		right: var(--spacing-12);
		top: var(--spacing-12);
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

		> div {
			margin-top: var(--spacing-10);
		}
	}

	.container {
		display: block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 14px;
		user-select: none;
		color: var(--color-white);
	}

	/* Hide the browser's default radio button */
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	/* Create a custom radio button */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 15px;
		width: 15px;
		background-color: #eee;
		border-radius: 50%;
	}

	/* On mouse-over, add a grey background color */
	.container:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the radio button is checked, add a blue background */
	.container input:checked ~ .checkmark {
		background-color: var(--color-accent);
	}

	/* Create the indicator (the dot/circle - hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the indicator (dot/circle) when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
	}

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

	.go-to-links {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: auto;
	}
</style>
