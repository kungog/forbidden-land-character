interface SkillItem {
	key: keyof Character['skills'];
	value: number;
}

const getObject = (key: any, value: any): SkillItem => {
	return {
		key,
		value
	};
};

const createArrayFromObject = (objects: any): SkillItem[] => {
	return Object.entries(objects).map((object) => {
		return getObject(object[0], object[1]);
	});
};

export default createArrayFromObject;
