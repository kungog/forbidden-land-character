<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Text from '$lib/components/Text.svelte';
	import { modal, showModal } from '$lib/store';

	const character: Character = $page.data.character;
	const handleCharacterInfo = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'description',
			index: 0,
			value: character.description
		};
	};
	const handleCharacterName = () => {
		$showModal = true;
		$modal = {
			id: $page.data.character._id,
			type: 'PUT',
			key: 'name',
			index: 0,
			value: character.name
		};
	};
</script>

<header>
	<a href="/" class="round-button">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 0.90332L1.20173 11.7018L0.903275 12L1.49999 12.5968L1.79826 12.2983L12 2.09662L22.2017 12.2983L22.5 12.5968L23.0967 12L22.7983 11.7018L12 0.90332ZM4.49999 2.25004V7.27846L7.49999 4.27837V2.25004H4.49999ZM12 3.22162L2.99999 12.2216V22.7813H5.99999V15H10.5V22.7813H21V12.2216L12 3.22162ZM13.5 15H18V18.75H13.5V15Z"
				fill="white"
			/>
		</svg>
	</a>
	<Button loading={false} handleClick={() => handleCharacterName()}>
		<Text size="medium">{character?.name ?? ''}</Text>
	</Button>
	<button on:click={() => handleCharacterInfo()} class="round-button">
		<svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.81203 0C-1.25016 5.70938 2.52219 6.80859 4.86281 8.09922C5.2675 7.21875 5.73234 6.42031 6.35578 5.67109C3.51203 4.4625 2.99797 1.83203 2.81203 0ZM16.8777 0C16.6917 1.83203 16.1777 4.4625 13.3339 5.67109C13.9573 6.42031 14.4222 7.21875 14.8269 8.09922C17.173 6.80859 20.9355 5.70938 16.8777 0ZM9.84484 4.10703C7.3675 5.61641 6.43781 7.08203 5.55734 9.29141C8.17688 9.93125 11.5073 9.93125 14.1323 9.29141C13.2519 7.08203 12.3222 5.61641 9.84484 4.10703ZM3.98234 9.93672C3.6925 10.5 2.63703 14.0219 2.62609 14.957C2.88312 14.6891 3.14562 14.4156 3.40266 14.1422L3.76359 14.4594C3.82375 13.0594 4.45266 11.5719 5.13625 10.2211C4.78078 10.1336 4.34328 10.0406 3.98234 9.93672ZM15.7073 9.93672C15.3683 10.0297 14.8706 10.15 14.5534 10.2211C15.2316 11.5719 15.8659 13.0594 15.9206 14.4594L16.287 14.1422L17.0636 14.957C17.6378 14.2789 15.9972 10.5 15.7073 9.93672ZM6.21359 10.418L5.78156 11.7195C7.02844 12.075 8.16594 12.4086 9.555 12.8133L9.19953 13.743C8.89328 13.6555 8.57609 13.568 8.26437 13.475C8.10578 13.7922 7.74484 14 7.35109 14C6.79328 14 6.35031 13.6063 6.35031 13.125C6.35031 13.0539 6.35578 12.9883 6.37219 12.9227L5.46437 12.6656L4.70422 14.9461L6.67844 16.8219L7.47688 15.3453H12.2073L13.0112 16.8219L14.9855 14.9461L14.2253 12.6656C13.93 12.7477 13.6347 12.8297 13.3448 12.9172C13.3667 12.9828 13.3722 13.0539 13.3722 13.125C13.3722 13.6063 12.9292 14 12.3659 14C11.9667 14 11.6058 13.7867 11.4472 13.4695C11.1245 13.5625 10.8073 13.65 10.4902 13.743L10.1292 12.8133C11.398 12.4414 12.5573 12.1078 13.9081 11.7195L13.4706 10.418C10.862 11.025 8.82766 11.025 6.21359 10.418ZM3.85109 15.6023L0 19.6328H2.59328L1.58703 22.2578H4.73156L3.92766 23.6578L5.97844 23.0617L9.84484 26.425L13.7113 23.0617L15.7566 23.6578L14.9527 22.2578H18.0972L17.0964 19.6328H19.6886L15.8331 15.6023L12.6941 18.3313L11.4964 16.2422H8.17687L6.97922 18.3313L3.85109 15.6023ZM8.83859 17.0078H10.8511V17.9922H8.83859V17.0078Z"
				fill="white"
			/>
		</svg>
	</button>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-16);
		width: 100%;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.round-button {
		position: relative;
		background: var(--color-box);
		border-radius: 999px;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
	}
</style>
