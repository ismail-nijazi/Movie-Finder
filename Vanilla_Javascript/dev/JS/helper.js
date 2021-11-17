import { SEARCH_API_URL, APIRequesOption, API_URL_OMDb, API_URL_OMDb_Key } from './config.js';
const axios = require('axios');


export const searchInAPI = async function (query, pageNr = 1) {
	let options = APIRequesOption;
	options.url = `${SEARCH_API_URL}search/movie`;
	options.params = { query: query, page: pageNr };
	const response = await axios.request(options);
	let results = response.data;
	return results;
}

export const getRecommedationMovies = async function (name, year) {
	const response = await axios.get(`${API_URL_OMDb}?t=${name}&y=${year}&apikey=${API_URL_OMDb_Key}`);
	return response.data;
}

export const getIMBD_ID_FROM_SearchAPI = async function (id) {
	let options = APIRequesOption;
	options.url = `${SEARCH_API_URL}movies/getdetails`;
	options.params = { movie_id: id };
	const response = await axios.request(options);
	return response.data.imdb_id;
}

export const getCompleteInfo_OMDB = async function (id) {
	const response = await axios.get(`${API_URL_OMDb}?i=${id}&apikey=${API_URL_OMDb_Key}`);
	const movieInfo = response.data;
	return {
		title: movieInfo.Title,
		duration: movieInfo.Runtime,
		released: movieInfo.Released,
		image: movieInfo.Poster,
		rating: movieInfo.imdbRating,
		genre: movieInfo.Genre,
		summary: movieInfo.Plot,
		id: movieInfo.imdbID,
		language: movieInfo.Language,
		imdbID: movieInfo.imdbID,
		actors: movieInfo.Actors,
	}
}