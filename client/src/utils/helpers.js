require('dotenv').config();

export const percent = (num1, num2) => {
	return parseInt((num1/(num1 + num2)) * 100);
};

export const total = (num1, num2) => {
	return num1 + num2;
}

export const randomizeArray = (arr) => {
	
	const inputArr = [...arr]

	const returnArr = [];

	for (let i = inputArr.length - 1; i > -1; i--) {
		const randomIndex = Math.floor( Math.random() * (i) );
		returnArr.push(inputArr[randomIndex]);
		inputArr.splice(randomIndex, 1);
	}

	return returnArr
}

export const getRandomValueFromArray = (arr) => {
	
	if (arr.length === 0) {
		throw new Error( 'Cannot get random value from empty array')
	} else {
		const randomIndex = Math.floor( Math.random() * (arr.length) );
		return arr[randomIndex]
	}
}

export const searchFailsMessage = (movieArr) => {
	const movieList = movieArr;
	if (movieList === []) {
		return `<p visibility='visible'>"Movie was not found in our database. Click Add Movie button to add it to our collection!"</p>;`
	} else {
		return `<p visibility='hidden'>;`
	}
}