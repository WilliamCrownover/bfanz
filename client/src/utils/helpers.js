export const percent = (num1, num2) => {
	return parseInt((num1/(num1 + num2)) * 100);
};

export const total = (num1, num2) => {
	return num1 + num2;
}