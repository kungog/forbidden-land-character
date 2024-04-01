<script lang="ts">
	import Box from '$components/Box.svelte';
	import PlusIcon from '$icons/General/PlusIcon.svelte';
	export let handleClick: () => void;
</script>

<Box size="small" {handleClick}>
	<div class="flex justify-c">
		<PlusIcon />
	</div>
</Box>
