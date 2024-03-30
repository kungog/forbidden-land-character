import { json } from '@sveltejs/kit';
import { validateAccess } from '$helpers/validate';
import { getMongoClient } from '$server/client';
import { DATABASE, COLLECTION } from '$server/database';
import { ObjectId } from 'mongodb';

export async function POST({ request, cookies }) {
	const passcode = cookies.get('passcode');
	validateAccess(passcode);

	const item = await request.json();
	const database = await getMongoClient();
	const objectId = new ObjectId(item._id);

	delete item._id;
	await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.updateOne({ _id: objectId }, { $set: item });

	return json({ ...item, _id: objectId }, { status: 201 });
}
