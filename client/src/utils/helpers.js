require('dotenv').config();

export const percent = (num1, num2) => {
	return parseInt((num1/(num1 + num2)) * 100);
};

export const total = (num1, num2) => {
	return num1 + num2;
}

export const fetchMovie = async (title) => {
	title.replace(' ', '+');

	const queryUrl = `http://www.omdbapi.com/?t=${title}&apikey=5b1b7e8b`

	const res = await fetch ( queryUrl );

	const movieData = await res.json();

	return convertMovieData(movieData);

};

const convertMovieData = (data) => {
	return {
		title: data.Title,
		year: data.Year,
		genre: data.Genre,
		director: data.Director,
		writer: data.Writer,
		actors: data.Actors,
		description: data.Plot,
		poster: data.Poster,
		imdbID: data.imdbID,
		response: data.Response
	}
};

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
