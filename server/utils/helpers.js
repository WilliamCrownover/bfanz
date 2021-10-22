require('dotenv').config({path:'../.env'});
const axios = require('axios');

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

const fetchMovie = async (title) => {
	title.replace(' ', '+');

	const queryUrl = `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`

	const res = await axios.get( queryUrl );

	return convertMovieData(res.data);

};

module.exports = {fetchMovie}
