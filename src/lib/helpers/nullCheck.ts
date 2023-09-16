export const nullCheckNumber = (value: number | null) => {
	return value && typeof value === 'number';
};
