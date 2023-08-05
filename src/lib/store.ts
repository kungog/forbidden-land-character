import MENU_ITEMS from '$lib/helpers/constants/menuItems';
import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const currentActiveMenu = writable(MENU_ITEMS[0]);
export const language = writable(ACTIVE_LANGUAGE);

interface Modal {
	type: string | number;
	id: 'armor' | 'weapon' | 'skill' | 'inventory' | 'talent' | 'relation' | 'notes' | 'horse';
}

export const modal = writable<Modal | null>(null);
