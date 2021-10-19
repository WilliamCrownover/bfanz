require('dotenv').config();

export const percent = (num1, num2) => {
	return parseInt((num1/(num1 + num2)) * 100);
};

export const total = (num1, num2) => {
	return num1 + num2;
}

export const fetchMovie = async (title) => {
	title.replace(' ', '+');

	const queryUrl = `http://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`

	const res = await fetch ( queryUrl );

	const movieData = await res.json();

	console.log(movieData);

	console.log(convertMovieData(movieData));

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
		indbID: data.imdbID
	}
};