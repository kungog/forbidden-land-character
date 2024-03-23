import { error } from '@sveltejs/kit';
import { getMongoClient } from '$server/client';
import type { PageServerLoad } from '../../$types';
import { DATABASE, COLLECTION } from '$server/database';
import { ObjectId } from 'mongodb';

export const load = (async ({ params }: { params: { id: Character['_id'] } }) => {
	const { id } = params;
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOne({ _id: new ObjectId(id) });

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(response);

	// close connection
	database.close();

	if (response) {
		return {
			character: JSON.parse(parsedData) as Character
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
