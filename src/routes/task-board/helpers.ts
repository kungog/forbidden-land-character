export type TypeOfBox = 'night' | 'day' | 'morning' | 'evening';

export interface IActivities {
	night: { type: number; id: number }[];
	day: { type: number; id: number }[];
	morning: { type: number; id: number }[];
	evening: { type: number; id: number }[];
}

export const ACTIVITES = [
	{
		text: 'VANDRA',
		id: 1
	},
	{
		text: 'LEDA VÄGEN',
		id: 2
	},
	{
		text: 'HÅLLA UTKIK',
		id: 3
	},
	{
		text: 'SÖKA FÖDA',
		id: 4
	},
	{
		text: 'JAGA',
		id: 5
	},
	{
		text: 'FISKA',
		id: 6
	},
	{
		text: 'SLÅ LÄGER',
		id: 7
	},
	{
		text: 'VILA',
		id: 8
	},
	{
		text: 'SOVA',
		id: 9
	},
	{
		text: 'UTFORSKA',
		id: 10
	}
];
