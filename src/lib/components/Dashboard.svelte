<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Text from '$lib/components/Text.svelte';
	import Coin from './Character/Coin.svelte';
	import Condition from './Character/Condition.svelte';
	import Property from './Character/Property.svelte';

	export let consumables: Character['consumables'],
		properties: Character['basic_properties'],
		condition: Character['condition'],
		critical: Character['critical_injuries'],
		money: Character['money'],
		experience: Character['experience'],
		powerPoints: Character['power_points'];
</script>

<div class="main">
	<div class="condition">
		<Box size="small" handleClick={() => {}}>
			<div class="flex space-b align-c">
				<div class="flex align-c">
					{critical ?? 'No critical injuries'}
				</div>
				<div class="flex align-c">
					{#each Object.entries(condition) as [key, value]}
						<Condition type={key} isActive={value} />
					{/each}
				</div>
			</div>
		</Box>
	</div>

	<div class="property">
		<Box size="small" handleClick={() => {}}>
			<div class="flex space-b align-c">
				{#each properties as property}
					<Property type={property.id} isActive={false} />
				{/each}
			</div>
		</Box>
	</div>

	<div class="consumable">
		<Box size="small" handleClick={() => {}}>
			<div class="flex space-b align-c">
				<Text>T{consumables.arrows}</Text>
				<Text>T{consumables.food}</Text>
				<Text>T{consumables.torches}</Text>
				<Text>T{consumables.water}</Text>
			</div>
		</Box>
	</div>

	<div class="point">
		<Box size="small" handleClick={() => {}}>
			<div class="flex space-b align-c">
				<div class="flex space-b">
					<Text>EP</Text><Text>{experience} / 25</Text>
				</div>
				<div class="flex space-b">
					<Text>KP</Text><Text>{powerPoints} / 10</Text>
				</div>
			</div>
		</Box>
	</div>

	<div class="money">
		<Box size="small" handleClick={() => {}}>
			<div class="flex space-b align-c">
				<Coin type="gold" amount={money.gold} />
				<Coin type="silver" amount={money.silver} />
				<Coin type="copper" amount={money.copper} />
			</div>
		</Box>
	</div>
</div>

<style lang="scss">
	.main {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: var(--spacing-08);
		grid-template-areas:
			'condition condition condition condition'
			'properties properties consumables consumables'
			'points points money money';
	}
	.money,
	.point,
	.property,
	.consumable,
	.condition {
		width: 100%;
	}

	.money {
		grid-area: money;
	}
	.point {
		grid-area: points;
	}
	.property {
		grid-area: properties;
	}
	.consumable {
		grid-area: consumables;
	}
	.condition {
		grid-area: condition;
	}
</style>
