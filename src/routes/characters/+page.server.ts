import { error, json } from '@sveltejs/kit';
import { getMongoClient, removeObjectId } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { validateAccess } from '$lib/helpers/validate';
import { emptyCharacter } from '$lib/helpers/getCharacterObject.js';

export const load = (async ({ cookies }) => {
	const passcode = cookies.get('passcode');
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.find({ profile_id: passcode })
		.toArray();

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			characters: JSON.parse(parsedData)
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const passcode = cookies.get('passcode');
		const database = await getMongoClient();

		validateAccess(passcode);

		const body = { ...emptyCharacter, profile_id: passcode, name: data.get('name') };

		const response = await database.db(DATABASE).collection(COLLECTION.CHARACTERS).insertOne(body);

		// close connection
		database.close();

		return removeObjectId({ _id: response.insertedId, ...body });
	}
};
