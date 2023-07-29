<script lang="ts">
	export let inventory: Character['inventory'];
</script>

<div>
	{inventory.map((i) => i)}
</div>

<style lang="scss">
</style>
