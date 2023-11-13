<script lang="ts">
	import getSkillObject from '$lib/helpers/getSkills';
	import { capitalize } from '$lib/helpers/utilites';
	import { language, modal, showModal } from '$lib/store';
	import Overlay from './Overlay.svelte';
	import Text from './Text.svelte';

	const noLabels = ['weapons', 'newWeapon', 'newTalent'];
	const getLabel = () => {
		if (!$modal?.id) return '';

		if (noLabels.includes($modal?.id)) return '';
		if ($modal?.key === 'skills' && $modal?.objectKey) {
			const skillObject = getSkillObject($modal?.objectKey as keyof Skills, 0);
			return skillObject.languages[$language];
		}

		return '';
	};

	const label = getLabel();
	const handleCloseModal = () => ($showModal = false);
</script>

<Overlay handleClick={() => handleCloseModal()} />
<dialog>
	<section>
		<div>
			<Text size="medium">{capitalize(label)}</Text>
			<button on:click={() => handleCloseModal()}>x</button>
		</div>
		<slot />
	</section>
</dialog>

<style lang="scss">
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
		max-height: 90vh;
		overflow: auto;
		width: 90%;
		background: var(--color-box);
		border-radius: var(--radius-04);
		padding: var(--spacing-16);
		pointer-events: initial;
	}

	button {
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		color: var(--color-text);
		font-size: 20px;
		height: 24px;
		width: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
	}
</style>
