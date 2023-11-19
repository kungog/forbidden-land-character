import { getMongoClient, removeObjectId } from '$lib/server/client';
import { DATABASE, COLLECTION } from '$lib/server/database';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const database = await getMongoClient();
		const body = {
			name: data.get('name'),
			description: data.get('description'),
			comment: data.get('comment'),
			stages: {
				one: data.get('one'),
				two: data.get('two'),
				three: data.get('three')
			}
		};

		console.log('--- NEW TALENTS ---');
		console.log(body);

		const response = await database.db(DATABASE).collection(COLLECTION.TALENTS).insertOne(body);

		// close connection
		database.close();
		return removeObjectId({ _id: response.insertedId, ...body });
	}
};
