import { SKILLS } from './constants/skills';

const getSkillObject = (skill: keyof Character['skills']) => SKILLS[skill];

export default getSkillObject;
