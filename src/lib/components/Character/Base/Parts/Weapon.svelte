<script lang="ts">
	import Text from '$lib/components/Text.svelte';
	import WeaponBonusIcon from '../../Icons/General/WeaponBonusIcon.svelte';
	import WeaponDamageIcon from '../../Icons/General/WeaponDamageIcon.svelte';
	import WeaponLengthIcon from '../../Icons/General/WeaponLengthIcon.svelte';

	export let additionals: string, bonus: string, damage: string, range: string, type: string;
</script>

<div class="weapon">
	<div class="flex space-b">
		<Text size="small">{type}</Text>
		<Text size="small">{additionals ?? ''}</Text>
	</div>

	<div class="flex stats">
		<Text size="small">Bonus: {bonus}</Text>

		<Text size="small">Skada: {damage}</Text>

		<Text size="small">Räckvidd: {range.toLocaleLowerCase()}</Text>
	</div>
</div>

<style lang="scss">
	.stats {
		gap: var(--spacing-18);
	}
	.weapon > :first-child {
		margin-bottom: 10px;
	}
</style>
