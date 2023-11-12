import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const passcode = formData.get('passcode') as string;

		if (passcode && passcode.length > 0) {
			cookies.set('passcode', passcode, {
				path: '/'
			});
		}

		throw redirect(302, '/characters');
	}
};
