//@ts-nocheck
import { BOOLEANS, NUMBERS, WEAPONS } from '$lib/helpers/constants/formValueTypes';
import { formArmorValues, formPropertiesValues } from '$lib/helpers/form';
import { validateUserAccess } from '$lib/helpers/validate';
import { getMongoClient } from '$lib/server/client';
import { DATABASE, COLLECTION } from '$lib/server/database';
import type { Cookies } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

type HandleValidateFormInput = {
	request: Request;
	cookies: Cookies;
};

export const handleValidateFormInput = async ({ request, cookies }: HandleValidateFormInput) => {
	const data = await request.formData();
	const validate = cookies.get('passcode');
	const profile_id = data.get('profile_id') as string;
	const id = data.get('id') as string;

	if (!profile_id) console.error('No passcode passed!');
	validateUserAccess(profile_id, validate);

	const body = getBodyObject(data);

	return { body, id, data };
};

type BodyObject = object & {
	profile_id?: never;
	id?: never;
	objectKey?: never;
	note?: string;
	relation?: string;
};

const checkIfArrayExist = (obj: object, key: string) => {
	return !Object.prototype.hasOwnProperty.call(obj, key) ? { ...obj, [key]: [] } : obj;
};

const createArrayObject = (key, value) => {
	return { [key]: key === 'value' ? Number(value) : value };
};

export const getBodyObject = (data: FormData) => {
	const objectKey = data.get('objectKey') as string;
	let body: BodyObject = {};
	const weapons = objectKey.replace(/[0-9]/g, '');

	// Loop through form values
	for (const object of data.entries()) {
		let value = object[1] as string | number | boolean;
		let key = object[0];

		// Check if value should be a boolean/number else save as string
		if (BOOLEANS.includes(key)) {
			value = value === 'true' ? true : false;
		}

		if (NUMBERS.includes(key) && objectKey !== 'description') {
			value = Number(value);
		}

		if (['age', 'reputation'].includes(key) && objectKey === 'description') {
			value = Number(value);
		}

		if (weapons === 'weapons') {
			body = checkIfArrayExist(body, 'extra_dices');
		}

		if (weapons === 'weapons' && !WEAPONS.includes(key)) {
			const slicedKey = key.split('_');
			const index = Number(slicedKey[0]);

			if (!body.extra_dices[index]) {
				body.extra_dices[index] = createArrayObject(slicedKey[1], object[1]);
			}

			if (body.extra_dices[index]) {
				body.extra_dices[index] = {
					...body.extra_dices[index],
					...createArrayObject(slicedKey[1], object[1])
				};
			}

			value = '';
			key = '';
		}

		body = key || value ? { ...body, [key]: value } : body;
	}

	// Remove these properties
	delete body.profile_id;
	delete body.id;
	delete body.objectKey;

	if (['armor'].includes(objectKey)) {
		body = formArmorValues(body);
	}

	if (['basic_properties'].includes(objectKey)) {
		body = formPropertiesValues(body);
	}

	if (Object.hasOwn(body, 'relation') || Object.hasOwn(body, 'note')) {
		return [body.relation ?? body.note];
	}

	return body;
};

type HandleUpdateDatabaseProps = {
	id: string;
	object: object;
	post?: boolean;
};

export const handleUpdateDatabase = async ({
	id,
	object,
	post = false
}: HandleUpdateDatabaseProps) => {
	const body = post ? { $push: object } : { $set: object };
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOneAndUpdate({ _id: new ObjectId(id) }, body);

	database.close();
	return response;
};

type HandleDeleteDatabaseProps = {
	id: string;
	object: object;
};

export const handleDeleteDatabase = async ({ id, object }: HandleDeleteDatabaseProps) => {
	const body = { $pull: object };
	const database = await getMongoClient();

	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.updateOne({ _id: new ObjectId(id) }, body);

	database.close();
	return response;
};
