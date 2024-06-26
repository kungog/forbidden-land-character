import { writable } from 'svelte/store';

const MAIN_LANGUAGES: ['sv', 'en'] = ['sv', 'en'];
const ACTIVE_LANGUAGE = MAIN_LANGUAGES[0];

export const DAY_TIME = [
	{
		text: 'Night',
		period: 'night'
	},
	{
		text: 'Morning',
		period: 'morning'
	},
	{
		text: 'Day',
		period: 'day'
	},
	{
		text: 'Evening',
		period: 'evening'
	}
];

export const AMOUNT_OF_PLAYERS = [2, 3, 4, 5, 6, 7];

const CURRENT_TIME = DAY_TIME[0];
const PLAYER_AMOUNT = AMOUNT_OF_PLAYERS[0];

export const activeMenu = writable<MenuItems>();
export const language = writable<'sv' | 'en'>(ACTIVE_LANGUAGE);
export const currentDayTime = writable(CURRENT_TIME);
export const amountOfPlayers = writable(PLAYER_AMOUNT);
export const showModal = writable(false);
export const showConfirm = writable(false);
export const activeAnimal = writable(0);
export const currentBase = writable(0);

export type ModalKeys =
	| 'armor'
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
	type: ModalKeys;
	index: number;
	objectKey?: keyof Skills;
}

export const modal = writable<Modal>({ type: 'animals', index: 0 });

type Toaster = {
	type: 'success' | 'error';
	text?: string;
	timeout: number;
} | null;

export const showToaster = writable<Toaster>(null);
