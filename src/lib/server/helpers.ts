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

type BodyObject = object & { profile_id?: never; id?: never; objectKey?: never };

export const getBodyObject = (data: FormData) => {
	let body: BodyObject = {};

	for (const object of data.entries()) {
		body = { ...body, [object[0]]: object[1] };
	}

	// Remove these properties
	delete body.profile_id;
	delete body.id;
	delete body.objectKey;

	return body;
};

type HandleUpdateDatabaseProps = {
	id: string;
	object: object;
	post: boolean;
};

export const handleUpdateDatabase = async ({ id, object, post }: HandleUpdateDatabaseProps) => {
	const body = post ? { $push: object } : { $set: object };
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOneAndUpdate({ _id: new ObjectId(id) }, body);

	database.close();
	return response;
};

export const handleInsertDatabase = async ({ id, object, post }: HandleUpdateDatabaseProps) => {
	const body = post ? { $push: object } : { $set: object };
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOneAndUpdate({ _id: new ObjectId(id) }, body);

	database.close();
	return response;
};
