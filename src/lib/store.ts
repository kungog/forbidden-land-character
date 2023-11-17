import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const activeMenu = writable<MenuItems>();
export const language = writable<'sv' | 'en'>(ACTIVE_LANGUAGE);
export const showModal = writable(false);
export const showConfirm = writable(false);
export const activeAnimal = writable(0);

export type ModalKeys =
	| 'armor'
	| 'weapons'
	| 'skills'
	| 'inventory'
	| 'talents'
	| 'relations'
	| 'notes'
	| 'animals'
	| 'condition'
	| 'basic_properties'
	| 'consumables'
	| 'power_points'
	| 'money'
	| 'description'
	| 'name'
	| 'animals_inventory';

interface Modal {
	id: Character['_id'];
	key: ModalKeys;
	type: 'NULL' | 'POST' | 'PUT' | 'DELETE';
	index: number;
	value: any;
	objectKey?: keyof Skills;
	talentId?: string;
}

export const modal = writable<Modal>();
