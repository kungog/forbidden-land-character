import { COMBAT_MENU_ITEMS, CHARACTER_MENU_ITEMS } from '$lib/helpers/constants/menuItems';
import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const combatActiveMenu = writable(COMBAT_MENU_ITEMS[0]);
export const characterActiveMenu = writable(CHARACTER_MENU_ITEMS[0]);
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
		| 'notes'
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
