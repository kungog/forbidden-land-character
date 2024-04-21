<script lang="ts">
	import { page } from '$app/stores';
	import { language, currentBase, showToaster } from '$store';
	import { GENERAL_LABELS } from '$helpers/constants/languages';
	import Button from '$components/Button.svelte';
	import GridTemplate from '$components/GridTemplate.svelte';
	import Input from '$components/Input.svelte';
	import Modal from '$components/Modal.svelte';
	import Text from '$components/Text.svelte';
	import { invalidate } from '$app/navigation';
	import { BASE_URL } from '$helpers/utilites';
	import ArrowLeft from '$icons/General/ArrowLeft.svelte';
	import GridIcon from '$icons/General/GridIcon.svelte';

	const character: Character = $page.data.character;
	const homePath = `/characters/${character._id}`;
	const goBackPath = `/characters/`;
	const LABEL = GENERAL_LABELS[$language];

	const handleBaseChange = () => {
		if ($currentBase < 3) $currentBase++;
		if ($currentBase === 3) $currentBase = 0;
	};

	$: isHomePage = $page.url.pathname === homePath;
	$: isNotHomePage = $page.url.pathname !== homePath;

	let showModal = false;
	let edit = character.name;

	const onClose = () => {
		showModal = false;
	};

	const onSubmit = async () => {
		if (!edit) return console.error('Missing values in form');
		await fetch(BASE_URL + character._id, {
			method: 'POST',
			body: JSON.stringify({ ...character, name: edit })
		});

		showModal = false;
		invalidate('viewed:character');

		$showToaster = {
			type: 'success',
			text: 'Updated: ' + edit,
			timeout: 3500
		};
	};
</script>

{#if showModal}
	<Modal {onClose} {onSubmit} remove={false} onDelete={() => {}}>
		<GridTemplate template="1fr">
			<Input iType="text" iLabel={LABEL.name} bind:iValue={edit} iFor="name" />
		</GridTemplate>
	</Modal>
{/if}

<header>
	<a href={isHomePage ? goBackPath : homePath} class="round-button">
		{#if isHomePage}
			<GridIcon color="var(--color-accent)" />
		{/if}
		{#if !isHomePage}
			<ArrowLeft />
		{/if}
	</a>
	<Button loading={false} handleClick={() => (showModal = true)}>
		<Text size="medium">{character?.name ?? ''}</Text>
	</Button>

	{#if isNotHomePage}
		<div style="width: 40px" />
	{/if}
	{#if isHomePage}
		<button on:click={() => handleBaseChange()} class="round-button">
			{#if $currentBase === 0}
				<svg
					width={24}
					height={24}
					viewBox="0 0 32 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.32627 0L2.86699 1.90547C2.04326 2.34844 1.2626 3.58594 0.747168 5.16445C0.332227 6.44414 0.0895508 7.89961 0 9.26367L7.59678 5.36133L9.32627 0ZM22.1778 0.00703114L23.9142 5.36133L31.5021 9.2707C31.4132 7.91367 31.1671 6.44414 30.7569 5.17148C30.3673 3.97266 29.8272 2.96719 29.2189 2.35547C29.0343 2.15859 28.8429 2.01094 28.6446 1.90547L22.1778 0.00703114ZM10.3585 0.815625L8.60166 6.26133L2.25107 9.52383L3.21357 13.2855L9.28525 16.4074L15.7521 15.2895L22.2188 16.4074L28.2892 13.2855L29.253 9.52383L22.9093 6.26133L21.1456 0.822656H20.4278L16.3741 6.02227L16.3673 10.3184H15.13L15.1368 6.0293L11.0831 0.815625H10.3585ZM3.62852 14.9027L5.13584 20.802L15.13 17.7223V16.6887L9.08701 17.7223L3.62852 14.9027ZM27.879 14.9027L22.4103 17.7223L16.3673 16.6887V17.7223L26.3683 20.802L27.879 14.9027ZM15.13 19.0301L12.9698 19.7051L10.5704 24.641L15.13 22.2996V19.0301ZM16.3673 19.0301V22.2996L20.9405 24.648L18.5343 19.7051L16.3673 19.0301ZM11.3565 20.1973L5.45029 22.0254L7.17979 28.7965L11.3565 20.1973ZM20.1476 20.2043L24.3243 28.7895L26.0538 22.0254L20.1476 20.2043ZM16.3673 23.7199L16.3741 26.7574L23.2579 29.4152L21.8634 26.5465L16.3673 23.7199ZM15.13 23.7199L9.64756 26.5395L8.24619 29.4152L15.1368 26.7574L15.13 23.7199ZM15.1368 28.1074L9.55869 30.259L15.1368 30.9762V28.1074ZM16.3741 28.1074V30.9691L21.9591 30.252L16.3741 28.1074Z"
						fill="white"
					/>
				</svg>
			{/if}
			{#if $currentBase === 1}
				<svg
					width="20"
					height="27"
					viewBox="0 0 20 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.81203 0C-1.25016 5.70938 2.52219 6.80859 4.86281 8.09922C5.2675 7.21875 5.73234 6.42031 6.35578 5.67109C3.51203 4.4625 2.99797 1.83203 2.81203 0ZM16.8777 0C16.6917 1.83203 16.1777 4.4625 13.3339 5.67109C13.9573 6.42031 14.4222 7.21875 14.8269 8.09922C17.173 6.80859 20.9355 5.70938 16.8777 0ZM9.84484 4.10703C7.3675 5.61641 6.43781 7.08203 5.55734 9.29141C8.17688 9.93125 11.5073 9.93125 14.1323 9.29141C13.2519 7.08203 12.3222 5.61641 9.84484 4.10703ZM3.98234 9.93672C3.6925 10.5 2.63703 14.0219 2.62609 14.957C2.88312 14.6891 3.14562 14.4156 3.40266 14.1422L3.76359 14.4594C3.82375 13.0594 4.45266 11.5719 5.13625 10.2211C4.78078 10.1336 4.34328 10.0406 3.98234 9.93672ZM15.7073 9.93672C15.3683 10.0297 14.8706 10.15 14.5534 10.2211C15.2316 11.5719 15.8659 13.0594 15.9206 14.4594L16.287 14.1422L17.0636 14.957C17.6378 14.2789 15.9972 10.5 15.7073 9.93672ZM6.21359 10.418L5.78156 11.7195C7.02844 12.075 8.16594 12.4086 9.555 12.8133L9.19953 13.743C8.89328 13.6555 8.57609 13.568 8.26437 13.475C8.10578 13.7922 7.74484 14 7.35109 14C6.79328 14 6.35031 13.6063 6.35031 13.125C6.35031 13.0539 6.35578 12.9883 6.37219 12.9227L5.46437 12.6656L4.70422 14.9461L6.67844 16.8219L7.47688 15.3453H12.2073L13.0112 16.8219L14.9855 14.9461L14.2253 12.6656C13.93 12.7477 13.6347 12.8297 13.3448 12.9172C13.3667 12.9828 13.3722 13.0539 13.3722 13.125C13.3722 13.6063 12.9292 14 12.3659 14C11.9667 14 11.6058 13.7867 11.4472 13.4695C11.1245 13.5625 10.8073 13.65 10.4902 13.743L10.1292 12.8133C11.398 12.4414 12.5573 12.1078 13.9081 11.7195L13.4706 10.418C10.862 11.025 8.82766 11.025 6.21359 10.418ZM3.85109 15.6023L0 19.6328H2.59328L1.58703 22.2578H4.73156L3.92766 23.6578L5.97844 23.0617L9.84484 26.425L13.7113 23.0617L15.7566 23.6578L14.9527 22.2578H18.0972L17.0964 19.6328H19.6886L15.8331 15.6023L12.6941 18.3313L11.4964 16.2422H8.17687L6.97922 18.3313L3.85109 15.6023ZM8.83859 17.0078H10.8511V17.9922H8.83859V17.0078Z"
						fill="white"
					/>
				</svg>
			{/if}

			{#if $currentBase === 2}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 7V5M9 9.5H12V17.5M12 17.5H8M12 17.5H16M12 23.5C5.649 23.5 0.5 18.351 0.5 12C0.5 5.649 5.649 0.5 12 0.5C18.351 0.5 23.5 5.649 23.5 12C23.5 18.351 18.351 23.5 12 23.5Z"
						stroke="white"
					/>
				</svg>
			{/if}
		</button>
	{/if}
</header>

<style>
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
