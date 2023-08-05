<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Text from '../Text.svelte';
	import RadioButton from '../RadioButton.svelte';
	import { emptyTalentObject } from '$lib/helpers/getCharacterObject';

	const { talents }: Character = $page.data.character;

	const getTalent = () => {
		const talent = talents.find((talent) => talent.id === $modal?.type);
		if (!talent) return emptyTalentObject;
		return talent;
	};

	const talent = getTalent();
</script>

<div>
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={talent.value} iFor={$modal?.type} amount={3} />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
