import MENU_ITEMS from '$lib/helpers/constants/menuItems';
import { writable } from 'svelte/store';

export const currentActiveMenu = writable(MENU_ITEMS[0]);
