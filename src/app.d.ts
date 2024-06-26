// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type MenuItems =
		| 'experience'
		| 'talents'
		| 'weapons'
		| 'animals'
		| 'inventory'
		| 'relations'
		| 'notes';

	interface Talent {
		description: string;
		_id: string;
		name: string;
		comment: string;
		stages: {
			one: string | null;
			two: string | null;
			three: string | null;
		};
	}

	interface Character {
		animals: Animal[];
		carrying_capacity: number;
		experience: number;
		name: string;
		power_points: number;
		profession: string;
		critical_injuries: string;
		profile_id: string;
		_id: string;
		money: {
			gold: number;
			silver: number;
			copper: number;
		};
		race: string;
		armor: Armor;
		basic_properties: BasicProperties[];
		condition: Condition;
		consumables: Consumables;
		weapons: Weapon[];
		talents: CharacterTalent[];
		relations: string[];
		notes: string[];
		inventory: Inventory[];
		skills: Skills;
		description: {
			face: string;
			body: string;
			age: number;
			reputation: number;
			pride: string;
			dark_secret: string;
			cloths: string;
		};
	}

	interface CharacterTalent {
		_id: string;
		value: 1 | 2 | 3;
	}

	interface Weapon {
		additionals: string;
		bonus: number;
		damage: number;
		range: 'arm' | 'close' | 'short' | 'long';
		type: string;
		extra_dices: WeaponExtraDices[];
	}

	interface WeaponExtraDices {
		info: string;
		value: number;
	}

	interface Inventory {
		additionals: string;
		bonus: string;
		name: string;
		weight: number;
	}

	interface Animal {
		flexibility: number;
		inventory: Inventory[];
		name: string;
		strength: number;
	}

	interface Armor {
		body: {
			name: string;
			value: number;
		};
		head: {
			name: string;
			value: number;
		};
		shield: {
			name: string;
			value: number;
		};
	}

	interface BasicProperties {
		failure: 1 | 2 | 3 | 4 | 5;
		id: 'strength' | 'flexibility' | 'intelligence' | 'charisma';
		value: 1 | 2 | 3 | 4 | 5;
	}

	interface Condition {
		cooled: string;
		dry: string;
		sleepless: string;
		starved: string;
	}

	interface Consumables {
		arrows: number;
		food: number;
		torches: number;
		water: number;
	}

	interface Skills {
		animal_handling: number;
		close_combat: number;
		craftmanship: number;
		dexterity: number;
		education: number;
		healing_art: number;
		manipulate: number;
		marksman: number;
		mobility: number;
		scout: number;
		see_through: number;
		poetry_art: number;
		sneak: number;
		stamina: number;
		strength_test: number;
		survival: number;
	}
}

export {};
