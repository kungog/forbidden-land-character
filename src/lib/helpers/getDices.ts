import type { SkillObject } from './constants/skills';

interface GetDice {
	properties: Character['basic_properties'];
	skill: SkillObject;
	value: number;
}

export const getSkillDice = ({ properties, skill, value }: GetDice) => {
	const property = properties.find((property: BasicProperties) => property.id === skill.type);

	if (!property) {
		//FIXME error handling
		console.error('No property found');
		return { property: 0, skill: 0, attack: null };
	}

	return {
		property: property.value - property.failure,
		skill: value,
		attack: null
	};
};
