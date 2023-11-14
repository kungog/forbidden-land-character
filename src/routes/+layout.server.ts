import { error } from '@sveltejs/kit';
import type { PageServerLoad, LayoutServerLoad } from './$types';
import { getMongoClient } from '$lib/server/client';
import { COLLECTION, DATABASE } from '$lib/server/database';

export const load: LayoutServerLoad = (async () => {
	const database = await getMongoClient();
	const reponse = await database.db(DATABASE).collection(COLLECTION.TALENTS).find({}).toArray();

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			talents: JSON.parse(parsedData)
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
