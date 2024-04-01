<script lang="ts">
	export let iValue: number,
		iFor: string,
		amount: number = 5;
</script>

<div class="radio">
	{#each Array.from({ length: amount }, (_, i) => i + 1) as number}
		<label for={iFor}>
			<input type="radio" name={iFor} value={number} bind:group={iValue} />
			{number}
		</label>
	{/each}
</div>

<style>
	input {
		opacity: 0;
		position: absolute;
		width: 40px;
		height: 40px;
		margin: 0;
	}

	label {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 999px;
		cursor: pointer;
		border: 1px solid var(--color-text);
		color: var(--color-text);

		&:has(input:checked) {
			background-color: var(--color-accent);
			border: 1px solid transparent;
			color: var(--color-black);
		}
	}
</style>
