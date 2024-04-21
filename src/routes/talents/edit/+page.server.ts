import { getMongoClient } from '$server/client';
import { DATABASE, COLLECTION } from '$server/database';
import { ObjectId } from 'mongodb';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const database = await getMongoClient();
		const id = data.get('id') as string;
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

		console.log('--- EDIT TALENTS ---');
		console.log(body);

		await database
			.db(DATABASE)
			.collection(COLLECTION.TALENTS)
			.updateOne({ _id: new ObjectId(id) }, { $set: body });

		// close connection
		database.close();
		return;
	}
};
