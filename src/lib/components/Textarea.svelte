<script lang="ts">
	import { capitalize } from '$helpers/utilites';

	export let iLabel: string,
		iValue: string | number = '',
		iFor: string;
</script>

<label for={iFor}>
	{capitalize(iLabel)}
	<textarea name={iFor} bind:value={iValue} />
</label>

<style>
	textarea {
		margin-top: var(--spacing-08);
		background: var(--color-box);
		border: 1px solid transparent;
		padding: var(--spacing-10) var(--spacing-14);
		color: var(--color-text);
		width: 100%;
		border-radius: var(--radius-04);
		resize: vertical;

		&:focus {
			outline: none;
			border: 1px solid var(--color-accent);
		}
	}

	label {
		font-size: 14px;
		margin-bottom: var(--spacing-08);
		color: var(--color-text);
	}
</style>
