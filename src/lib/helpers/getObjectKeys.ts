const createArrayFromObject = <T>(objects: { [key in keyof T]: T[key] }) => {
	const entries = Object.entries(objects) as [keyof T, number][];
	return entries.map((object) => ({
		key: object[0],
		value: object[1]
	}));
};

export default createArrayFromObject;
