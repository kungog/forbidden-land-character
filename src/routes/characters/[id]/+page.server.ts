import { error } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import type { PageServerLoad } from '../$types';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { ObjectId } from 'mongodb';
import { handleUpdateDatabase, handleValidateFormInput } from '$lib/server/helpers';

export const load = (async ({ params }) => {
	const { id } = params as { id: Character['_id'] };
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOne({ _id: new ObjectId(id) });

	// Remove objectId from mongo
	const parsedData = await JSON.stringify(reponse);

	// close connection
	database.close();

	if (reponse) {
		return {
			character: JSON.parse(parsedData) as Character
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;

export const actions = {
	update: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;
		const object = objectKey === 'base' ? body : { [objectKey]: body };
		await handleUpdateDatabase({
			id,
			object,
			post: false
		});
	},
	create: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;
		const object = objectKey === 'base' ? body : { [objectKey]: body };
		await handleUpdateDatabase({
			id,
			object,
			post: true
		});
	},
	delete: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;

		console.log('--- DELETE ITEM ---');
	}
};
