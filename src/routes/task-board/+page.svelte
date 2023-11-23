<script lang="ts">
	import { GENERAL_LABELS } from '$lib/helpers/constants/languages';
	import {
		language,
		amountOfPlayers,
		AMOUNT_OF_PLAYERS,
		currentDayTime,
		DAY_TIME
	} from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Ball from '$lib/components/Ball.svelte';
	import { ACTIVITES, type IActivities } from './helpers';
	import Button from '$lib/components/Button.svelte';
	import Box from '$lib/components/Box.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import { capitalize } from '$lib/helpers/utilites';

	let activeBall = 0;
	let active = '';
	let showModal = false;
	let showTimeModal = false;
	/* 	let activities = {
		night: [],
		day: [],
		morning: [],
		evening: []
	} as IActivities; */

	/* 	console.log(activities); */
	/* 	const handlePlayerActivity = (id: number) => {
		console.log('hej', { type: id, id: activeBall });
		return activities[active].push({ type: id, id: activeBall });
	}; */

	const handlePeriodEvent = (time: any) => {
		showTimeModal = true;
		active = time.period;
		console.log('hej', active);
	};
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
			<Text size="large">{GENERAL_LABELS[$language].amount_players}:</Text>
			<div>
				{#each AMOUNT_OF_PLAYERS as players}
					<label class="container">
						{players}
						<input
							checked={players === $amountOfPlayers}
							on:change={() => ($amountOfPlayers = players)}
							type="radio"
							name="radio"
						/>
						<span class="checkmark" />
					</label>
				{/each}
			</div>
		</section>
	</dialog>
{/if}

<div class="main">
	<div class="players-picker flex">
		{#each [...Array($amountOfPlayers).keys()] as player}
			<Ball
				--color={`var(--color-player-${player})`}
				handleClick={() => (activeBall = player)}
				active={activeBall === player}
			/>
		{/each}
	</div>

	<div class="time-picker flex space-b">
		{#each DAY_TIME as time}
			<Button handleClick={() => ($currentDayTime = time)}>
				{time.text}
			</Button>
		{/each}
	</div>

	{#each DAY_TIME as time}
		<Box
			special
			inverted
			handleClick={() => handlePeriodEvent(time)}
			active={$currentDayTime.period === time.period}
		>
			<span>{time.text}</span>
			<div class="flex column">
				<!-- {#each activities.night as player}
					<Ball --color={`var(--color-player-${player})`} --size={'25px'} />
				{/each} -->
			</div>
		</Box>
	{/each}
</div>

{#if showTimeModal}
	<Overlay handleClick={() => (showTimeModal = false)} />
	<dialog>
		<section>
			<Divider size="small" />
			<Text textCenter size="large">{capitalize('Vad vill du göra?')}</Text>
			<Divider size="small" />
			<div class="grid">
				{#each ACTIVITES as activity}
					<Box special inverted handleClick={() => activity.id}>
						<Divider />
						<span class="small">{activity.text}</span>
					</Box>
				{/each}
			</div>
		</section>
	</dialog>
{/if}

<style lang="scss">
	.players-picker {
		position: absolute;
		gap: 10px;
		padding-top: 10px;
		top: 0;
	}

	.time-picker {
		width: calc(100% - var(--spacing-20) * 2);
		justify-content: space-around;
		position: absolute;
		gap: 10px;
		padding-top: 10px;
		top: 80px;

		@media (max-width: 660px) {
			top: 40px;
		}
	}

	.grid {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: var(--spacing-20);

		@media (max-width: 660px) {
			grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
		}
	}

	.main {
		display: grid;
		height: var(--main-height);
		gap: var(--spacing-20);
		padding: var(--spacing-130) var(--spacing-20) var(--spacing-20);
		grid-template-columns: repeat(2, 1fr);

		@media (max-width: 660px) {
			padding: var(--spacing-80) var(--spacing-12) var(--spacing-12);
			gap: var(--spacing-12);
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.column {
		gap: var(--spacing-10);
	}

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 100px;
		color: var(--color-box);
		user-select: none;

		@media (max-width: 1200px) {
			font-size: 70px;
		}

		@media (max-width: 660px) {
			font-size: 40px;
		}

		&.small {
			font-size: 14px;
			font-weight: bold;
		}
	}

	.settings {
		background: transparent;
		border: 0;
		outline: 0;
		position: absolute;
		right: var(--spacing-12);
		top: var(--spacing-12);
	}

	.container {
		display: block;
		position: relative;
		padding-left: 25px;
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
		top: 0;
	}

	section {
		top: 0;
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
</style>
