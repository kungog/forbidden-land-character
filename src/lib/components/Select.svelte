<script lang="ts">
	import { capitalize } from '$helpers/utilites';

	export let iLabel: string,
		iValue: string | number = '',
		warning: boolean = false,
		iFor: string;
</script>

<label for={iFor}>
	{capitalize(iLabel)}
	<select
		name={iFor}
		bind:value={iValue}
		style={warning ? 'color: var(--color-active);' : 'color: var(--color-text);'}
	>
		<slot />
	</select>
</label>

<style lang="scss">
	label {
		font-size: 14px;
		color: var(--color-text);
	}

	select {
		border: 0;
		outline: 0;
		margin-top: var(--spacing-08);
		background: var(--color-box);
		color: var(--color-white);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		width: 100%;
		border-radius: var(--radius-04);
		padding: var(--spacing-10) var(--spacing-14);

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}
</style>
