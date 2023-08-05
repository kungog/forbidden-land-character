<script lang="ts">
	import { page } from '$app/stores';
	import { modal } from '$lib/store';
	import Text from '../Text.svelte';
	import RadioButton from '../RadioButton.svelte';

	const { skills }: Character = $page.data.character;

	const key: keyof Skills = $modal?.type;
	const skill = skills[key];
</script>

<div>
	<Text selfCenter={false} size="normal">FV</Text>
	<RadioButton iValue={skill} iFor={$modal?.type} />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
