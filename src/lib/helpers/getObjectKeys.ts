const getObject = (key: any, value: any) => {
	return {
		key,
		value
	};
};

const createArrayFromObject = (
	objects: Character['skills']
): { key: keyof Character['skills']; value: number }[] => {
	return Object.entries(objects).map((object) => {
		return getObject(object[0], object[1]);
	});
};

export default createArrayFromObject;
