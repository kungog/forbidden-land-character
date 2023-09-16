import { json } from '@sveltejs/kit';
// import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
	const { formValues } = await request.json();

	console.log('--->', formValues);

	const userid = cookies.get('userid');
	// const { id } = await database.createTodo({ userid, description });

	return json({ formValues }, { status: 201 });
}
