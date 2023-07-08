<script lang="ts">
	export let dog_name: string, dog_owner: string;
	// dog_image: string;

	const getRandomDogImage = () => Math.floor(Math.random() * 5);
</script>

<div class="card">
	<img src={`assets/frank.png`} alt="Picture on the dog - {dog_name}" />
	<div class="card__content">
		<h4>{dog_name}</h4>
		<p>{dog_owner}</p>
	</div>
</div>

<style lang="scss">
	.card {
		border-radius: var(--radius-08);
		position: relative;
		height: 100%;
    width: 100%;
		overflow: hidden;

		&__content {
			padding: var(--spacing-12);
			position: absolute;
			bottom: var(--spacing-16);
			background: rgba(0, 0, 0, 0.7);
			border-radius: 0 var(--radius-08) var(--radius-08) 0;
			width: 50%;
			transform: translateX(-101%);
			transition: transform 0.25s;
		}

		&:hover {
			.card__content {
				transform: translateX(0);
			}

			img {
				filter: blur(1px);
			}
		}
	}

	img {
		border-radius: var(--radius-08);
		height: 100%;
    width: 100%;
    object-fit: cover;
		transition: filter 0.45s;
	}

	h4 {
		font-size: 20px;
		color: var(--color-white);
	}

	p {
		margin-top: 4px;
		font-size: 12px;
		color: var(--accent-color);
	}
</style>
