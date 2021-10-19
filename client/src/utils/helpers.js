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
		indbID: data.imdbID
	}
};