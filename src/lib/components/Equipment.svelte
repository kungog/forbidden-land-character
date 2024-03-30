<script lang="ts">
	import Text from '$components/Text.svelte';
	import BodyIcon from '$icons/General/BodyIcon.svelte';
	import HelmetIcon from '$icons/General/HelmetIcon.svelte';
	import ShieldIcon from '$icons/General/ShieldIcon.svelte';
	export let name: string, value: number, icon: 'shield' | 'body' | 'head';
	const equipmentIcon = {
		head: HelmetIcon,
		body: BodyIcon,
		shield: ShieldIcon
	};
</script>

<div class="flex equipment">
	<div class="flex">
		<svelte:component this={equipmentIcon[icon]} />
		<Text size="normal">{name ?? '-'}</Text>
	</div>
	<Text>{value ?? 0}</Text>
</div>

<style lang="scss">
	div {
		&.equipment:not(:last-child) {
			margin-bottom: var(--spacing-10);
		}
		> div {
			gap: var(--spacing-10);
			&:first-child {
				margin-right: auto;
			}
		}
	}
</style>
