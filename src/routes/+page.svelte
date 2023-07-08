<script>
	import Button from '$lib/components/Button.svelte'
  import DogCard from '$lib/components/DogCard.svelte'
	import { InlineCalendar } from 'svelte-calendar';

	$: hasPickedDate = false
	$: isOccupied = true
</script>

<div class="main-page center">
	<div class="main-page__content">
		<h1 class="orange-text">THE OFFICE DOG.</h1>
		<p>One dog a day. Book which day you want to bring your fluffy friend to the office.</p>
	</div>

	<div class="main-page__date">
		<InlineCalendar 
			format={'DD/MM/YYYY'}
			theme={{
				calendar: {
					width: '350px',	
					maxWidth: '100vw',
					legend: {
						height: '50px'
					},
					shadow: '0px 10px 26px rgba(0, 0, 0, 0.25)',
					colors: {
						text: {
							primary: 'var(--color-black)',
							highlight: 'var(--accent-black)'
						},
						background: {
							primary: 'var(--secondary-color)',
							highlight: 'var(--primary-color)',
							hover: 'var(--accent-color)'
						},
						border: 'var(--accent-color)'
					},
					grid: {
						disabledOpacity: '.1',
						outsiderOpacity: '.3'
					}
				}
			}}
		/>
	</div>
	<div class="main-page__images">
		<img src="assets/long-ears-brown-dog.png" alt="Picture on the dog - " />
		<img src="assets/long-ears-brown-dog.png" alt="Picture on the dog - " />
		<img src="assets/long-ears-brown-dog.png" alt="Picture on the dog - " />
	</div>
	<div  class="main-page__actions">
		{#if hasPickedDate && !isOccupied}
			<Button size='large' handleClick={() => console.log('Booka!')} loading={false}>Booka 24 Apil</Button>
		{/if}
		{#if isOccupied}
			<DogCard dog_name={'Frank'} dog_owner={'Oscar Gustafsson'} />
		{/if}
	</div>
</div>

<style lang="scss">
	.main-page {
		height: 100%;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: var(--spacing-80);
		grid-row-gap: var(--spacing-40);

		&__content {
			h1 {
				color: var(--accent-color);
				margin-bottom: var(--spacing-38);
			}
			p {
				max-width: 360px;
			}

		}

		&__date {
			display: flex;
			flex-direction: column;
		}

		&__images {
			position: relative;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-row-gap: var(--spacing-20);

			&::after {
				content: '';
				position: absolute;
				height: 1px;
				width: 100%;
				background: var(--accent-color);
				bottom: 0;
			}

			img {
				border-radius: var(--radius-08);
				padding-bottom: 94px;
			}
		}

		&__actions {
			display: flex;
			align-items: flex-start;
			height: 100%;
		}
	}

	@media (max-width: 950px) {
		.main-page {
			grid-template-columns: repeat(1, 1fr);
			&__content {
				max-width: 300px;

				p {
					max-width: 290px;
				}
			}

			&__images {
				display: none;
			}
		}
	}
</style>
