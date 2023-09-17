import { json } from '@sveltejs/kit';
import { getMongoClient } from '$lib/server/client';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { ObjectId } from 'mongodb';

export async function POST({ request, cookies }) {
	const { formValues, modal } = await request.json();

	console.log('POST --->', formValues, modal);

	const body = { [modal.key]: formValues };
	console.log('BODY --->', body);

	const passcode = cookies.get('passcode');
	// const { id } = await database.createTodo({ userid, description });
	const database = await getMongoClient();
	const reponse = await database
		.db(DATABASE)
		.collection(COLLECTION.CHARACTERS)
		.findOneAndUpdate({ _id: new ObjectId(modal.id) }, { $push: body });

	return json({ reponse }, { status: 201 });
}

export async function PUT({ request, cookies }) {
	const { formValues, modal } = await request.json();

	console.log('PUT --->', formValues, modal);

	const passcode = cookies.get('passcode');
	// const { id } = await database.createTodo({ userid, description });

	return json({ formValues }, { status: 201 });
}
