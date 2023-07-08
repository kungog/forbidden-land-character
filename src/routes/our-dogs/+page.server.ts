import { error } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';

export const load = (async () => {
	const database = await getMongoClient();
	const reponse = await database.db(DATABASE).collection(COLLECTION.DOGS).find({}).toArray();

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			dogs: JSON.parse(parsedData)
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
