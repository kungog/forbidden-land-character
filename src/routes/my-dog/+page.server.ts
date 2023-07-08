import { error } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { ObjectId } from 'mongodb';

export const load = (async () => {
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.DOGS)
		.findOne({ _id: new ObjectId('6414e12ea44c9f28f3603b1b') });

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			dog: JSON.parse(parsedData)
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
