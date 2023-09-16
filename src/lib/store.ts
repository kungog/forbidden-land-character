import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const activeMenu = writable<MenuItems>();
export const language = writable(ACTIVE_LANGUAGE);

interface Modal {
	type: string | number | null;
	id:
		| 'armor'
		| 'weapon'
		| 'skill'
		| 'inventory'
		| 'talent'
		| 'relation'
		| 'note'
		| 'animal'
		| 'condition'
		| 'properties'
		| 'consumables'
		| 'points'
		| 'experience'
		| 'equipment'
		| 'money';
}

export const modal = writable<Modal | null>(null);
