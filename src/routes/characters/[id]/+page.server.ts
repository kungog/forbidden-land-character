import {
	handleDeleteDatabase,
	handleUpdateDatabase,
	handleValidateFormInput
} from '$server/helpers';

export const actions = {
	update: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;
		const object = objectKey === 'base' ? body : { [objectKey]: body };

		console.log('--- UPDATE ITEM ---');
		console.log(object, body);

		await handleUpdateDatabase({
			id,
			object
		});
	},
	create: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;
		const object = objectKey === 'base' ? body : { [objectKey]: body };

		console.log('--- CREATE ITEM ---');
		console.log(object, body);
		await handleUpdateDatabase({
			id,
			object,
			post: true
		});
	},
	delete: async ({ cookies, request }) => {
		const { body, id, data } = await handleValidateFormInput({ cookies, request });
		const objectKey = data.get('objectKey') as string;
		const object = { [objectKey]: body };
		console.log('--- DELETE ITEM ---');
		console.log(object, body);
		await handleDeleteDatabase({
			id,
			object
		});
	}
};
