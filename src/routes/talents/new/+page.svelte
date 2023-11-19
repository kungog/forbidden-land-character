<script lang="ts">
	import GridTemplate from '$lib/modals/GridTemplate.svelte';
	import Input from '$lib/components/Input.svelte';
	import { ADD_NEW_TALENT } from '$lib/helpers/constants/languages';
	import { language } from '$lib/store';
	import Text from '$lib/components/Text.svelte';
	import { capitalize } from '$lib/helpers/utilites';
	import Divider from '$lib/components/Divider.svelte';

	const LABEL = ADD_NEW_TALENT[$language];
</script>

<form id="create" method="POST">
	<Text size="medium">{capitalize(LABEL.add_new)}</Text>
	<Divider />
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.title} iValue="" iFor="name" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.description} iValue="" iFor="description" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.one} iValue="" iFor="one" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.two} iValue="" iFor="two" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.three} iValue="" iFor="three" />
	</GridTemplate>
	<GridTemplate template="1fr">
		<Input iType="text" iLabel={LABEL.comment} iValue="" iFor="comment" />
	</GridTemplate>
	<button type="submit">Save</button>
</form>

<style lang="scss">
	form {
		padding: var(--spacing-48);
	}

	button {
		border: 0;
		padding: var(--spacing-08) var(--spacing-16);
		background: var(--color-active);
		border-radius: var(--radius-04);
		margin-top: var(--spacing-10);

		&:not(:last-child) {
			margin-right: var(--spacing-18);
		}

		&:disabled {
			background: var(--color-inactive);
			opacity: 0.8;
			cursor: not-allowed;
		}
	}
</style>
