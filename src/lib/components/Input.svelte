<script lang="ts">
	import { capitalize } from '$helpers/utilites';

	export let iType: 'text' | 'number' | 'textarea',
		iLabel: string,
		iValue: string | number = '',
		warning: boolean = false,
		iFor: string;
</script>

<label for={iFor}>
	{capitalize(iLabel)}
	{#if iType === 'textarea'}
		<textarea
			name={iFor}
			{...{ type: iType }}
			bind:value={iValue}
			rows="3"
			style={warning ? 'color: var(--color-active);' : 'color: var(--color-text);'}
		/>
	{:else}
		<input
			name={iFor}
			{...{ type: iType }}
			bind:value={iValue}
			style={warning ? 'color: var(--color-active);' : 'color: var(--color-text);'}
		/>
	{/if}
</label>

<style lang="scss">
	label {
		font-size: 14px;
		color: var(--color-text);
	}

	input,
	textarea {
		margin-top: var(--spacing-08);
		background: var(--color-box);
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
