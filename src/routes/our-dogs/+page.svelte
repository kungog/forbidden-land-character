<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import DogCard from '$lib/components/DogCard.svelte';
	import type { PageData } from './$types';
  import SpecialText from '$lib/components/SpecialText.svelte'
	export let data: PageData;
	const dogs = data?.dogs;
</script>

<div class="main-doggos">
	<div>
		<h1>The office <SpecialText color="accent" bold>dog</SpecialText> <SpecialText italic bold>squad</SpecialText></h1>
	</div>

	<div class="main-doggos__wrapper">
		<div class="main-doggos__grid">
			{#each dogs as dog}
				<a href="/our-dogs/{dog._id}">
					<DogCard dog_name={dog.name} dog_owner={'Oscar Gustafsson'} />
				</a>
			{/each}
			{#each dogs as dog}
				<a href="/our-dogs/{dog._id}">
					<DogCard dog_name={dog.name} dog_owner={'Oscar Gustafsson'} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.main-doggos {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(1, 1fr);

		h1 {
			position: fixed;
			max-width: 300px;
			font-weight: 600;
		}


		&__wrapper {
			height: 100%;
		}

		&__grid {
			display: grid;
			justify-content: center;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: var(--spacing-20);
			grid-row-gap: var(--spacing-20);
		}
	}

	@media (max-width: 400px) {
		.main-doggos {
			&__grid {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}

	@media (max-width: 600px) {
		.main-doggos {
			h1 {
				position: initial;
			}
		}
		
	}

	@media (min-width: 600px) {
		.main-doggos {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			
			&__wrapper {
				height: 100%;
			}

			&__grid {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				grid-column-gap: var(--spacing-20);
				grid-row-gap: var(--spacing-20);
			}
		}
	}

	@media (min-width: 800px) {
		.main-doggos {
			&__grid {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}

	@media (min-width: 1200px) {
		.main-doggos {
			display: grid;
			grid-template-columns: repeat(2, 1fr);

			
			&__wrapper {
				height: 100%;
			}

			&__grid {
				display: grid;
				grid-template-columns: repeat(2, minmax(300px, 300px));
			}
		}
	}
</style>
