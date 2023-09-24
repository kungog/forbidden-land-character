/*
 * Create base objects
 */

const getBaseObjects = (formObject: object) => {
	let newObject = {};
	Object.keys(formObject).forEach((key) => {
		if (key === 'profile_id') return;
		newObject = { ...newObject, [key.split('_')[0]]: {} };
	});

	return newObject;
};

/*
 * Fill new objects with data
 */

const fillObjectWithValue = (
	formObject: object,
	object: { [index: string]: object },
	addId = false
) => {
	let newObject = object;
	for (const [key, value] of Object.entries(formObject)) {
		let objectValue = { [key.split('_')[1]]: value };
		if (addId) {
			objectValue = { ...objectValue, id: key.split('_')[0] };
		}

		const objectKey = key.split('_')[0];

		if (newObject[objectKey]) {
			const newObjectKey = newObject[objectKey];
			newObject = {
				...newObject,
				[objectKey]: { ...newObjectKey, ...objectValue }
			};
		}
	}
	return newObject;
};

export const formArmorValues = (formObject: object) => {
	const newObject = getBaseObjects(formObject);
	return fillObjectWithValue(formObject, newObject);
};

export const formPropertiesValues = (formObject: object) => {
	const newObject = getBaseObjects(formObject);
	const filled = fillObjectWithValue(formObject, newObject, true);
	const array = [];
	// Create array with objects
	for (const value of Object.values(filled)) {
		array.push(value);
	}

	return array;
};
