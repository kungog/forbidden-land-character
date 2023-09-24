<script lang="ts">
	import { capitalize } from '$lib/helpers/utilites';

	export let iType: 'text' | 'number' | 'textarea',
		iLabel: string,
		iValue: string | number = '',
		warning: boolean = false,
		iFor: string;
</script>

<label>
	{capitalize(iLabel)}
	<input
		type={iType}
		name={iFor}
		value={iValue}
		style={warning ? 'color: var(--color-active);' : 'color: var(--color-text);'}
	/>
</label>

<style lang="scss">
	label {
		font-size: 14px;
		color: var(--color-text);
	}

	input {
		margin-top: var(--spacing-08);
		background: var(--color-background);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		width: 100%;
		border-radius: var(--radius-04);

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}
</style>
