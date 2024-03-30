import { invalidate } from '$app/navigation';
import {
	emptyAnimalObject,
	emptyInventoryObject,
	emptyTalentObject,
	emptyWeaponObject
} from './getCharacterObject';

export const nullCheck = (value: string) => {
	return value || value === '' ? value : null;
};

export const nullCheckNumber = (value: number) => {
	return !!(value && typeof value === 'number');
};

export const typeCheckPost = (value: any): boolean => {
	return !!value && value.type === 'POST';
};

export const capitalize = (string: string): string => {
	return string.toUpperCase();
};

export const getIsoTimezone = (date: Date) => {
	const offset = date.getTimezoneOffset();
	date = new Date(date.getTime() - offset * 60 * 1000);
	return date.toISOString().split('T')[0];
};

let timeout: any;
export const debounce = (func: () => void, timeoutValue = 250) => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		func();
	}, timeoutValue);
};

const BASE_URL = '/characters/';
export const getPath = (pathname: string, replace: string) => {
	return pathname.replace(BASE_URL + replace + '/', '');
};

export const addNewItem = async (
	char: Character,
	type: 'weapon' | 'inventory' | 'animal' | 'animal-inventory' | 'talent' | 'notes' | 'relations',
	index?: number
) => {
	let newChar = char;

	switch (type) {
		case 'weapon':
			newChar = { ...newChar, weapons: [...newChar.weapons, emptyWeaponObject] };

			break;

		case 'inventory':
			newChar = { ...newChar, inventory: [...newChar.inventory, emptyInventoryObject] };
			break;

		case 'animal':
			newChar = { ...newChar, animals: [...newChar.animals, emptyAnimalObject] };
			break;

		case 'animal-inventory':
			if (!index) return console.error('Missing index');
			newChar = {
				...newChar,
				animals: [
					...newChar.animals,
					{
						...newChar.animals[index],
						inventory: [...newChar.animals[index].inventory, emptyInventoryObject]
					}
				]
			};
			break;

		case 'talent':
			newChar = { ...newChar, talents: [...newChar.talents, emptyTalentObject] };
			break;

		case 'notes':
			newChar = { ...newChar, notes: [...newChar.notes, 'New note'] };
			break;

		case 'relations':
			newChar = { ...newChar, notes: [...newChar.relations, 'New relation'] };
			break;
	}

	await fetch(`/characters/${newChar._id}`, {
		method: 'POST',
		body: JSON.stringify(newChar)
	});

	invalidate('viewed:character');
};
