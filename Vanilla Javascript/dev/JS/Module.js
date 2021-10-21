import { searchInAPI, getIMBD_ID_FROM_SearchAPI, getRecommedationMovies, getCompleteInfo_OMDB } from './helper.js';
import { Movies, countOfResultsInPage, GenresList } from './config.js';


export const state = {
	recommendedMovies: [],
	search: {
		query: '',
		results: [],
		currentPage: 1,
		countOfPages: 0,
		toBeShown: [],
		requestCount: 0
	},
	bookmarks: [],
	movie: {},
}

const loadRecommendations = async function () {
	const temp = Promise.all(Movies.map(movie => {
		return getRecommedationMovies(movie.name, movie.year);
	}));
	return temp;
}

const getGenreWithID = function (genreID) {
	let genreName = '';
	GenresList.forEach(genre => {
		if (genre.id == genreID) {
			genreName = genre.name;
		}
	});
	return genreName;
}


const fixGenres = function () {
	let genres = [];
	state.search.results.map(movie => {
		if (Array.isArray(movie.genre_ids)) {
			movie.genre_ids.forEach(genreID => {
				const result = getGenreWithID(genreID);
				if (result) { genres.push(result); }
			});
			movie.genre_ids = genres.join(',');
		}
		genres = [];
	});

}

const resetStateSearch = function () {
	state.search = {
		query: '',
		results: [],
		currentPage: 1,
		countOfPages: 0,
		toBeShown: [],
		requestCount: 0
	}
}

const determineCountOfPages = function (data) {
	if (data.total_results > 60) {
		state.search.countOfPages = 6;
	}
	else {
		state.search.countOfPages = Math.ceil(data.total_results / countOfResultsInPage);
	}
}


const whichBeShownInSearchSection = function () {
	let end = 0;
	let start = ((state.search.currentPage - 1) * countOfResultsInPage) - 1;
	if (state.search.currentPage == 1) {
		start = 0;
	}
	if (state.search.results.length > countOfResultsInPage) {
		end = start + (countOfResultsInPage - 1);
	}
	else {
		end = state.search.results.length - start;
	}
	state.search.toBeShown = state.search.results.slice(start, end + 1);
	state.search.toBeShown.forEach(movie => {
		if (movie.poster_path == "https://image.tmdb.org/t/p/originalnull") {
			movie.poster_path = '';
		}
	})
}

export const isID_imdbID = function (id) {
	if (id.startsWith('tt')) {
		return true;
	}
	return false;
}

export const updateRecommendedMovies = async function () {
	state.recommendedMovies = [];
	state.recommendedMovies = await loadRecommendations();
}


const movieIsBookmarked = function () {
	let isBookmarked = false;
	state.bookmarks.forEach(movie => {
		if (movie.id === state.movie.id) {
			isBookmarked = true;
		}
	});
	return isBookmarked;


}

export const getMovie = async function (id) {
	let newID = id;
	if (!isID_imdbID(id)) {
		newID = await getIMBD_ID_FROM_SearchAPI(id);
	}
	const result = await getCompleteInfo_OMDB(newID);
	for (const [key, value] of Object.entries(result)) {
		if (result[key] == 'N/A') {
			result[key] = '';
		}
	}
	state.movie = result;
	state.movie.bookmarked = movieIsBookmarked();


}

export const getSearchResult = async function (searchQuery) {
	resetStateSearch();
	state.search.requestCount = 0;
	const data = await searchInAPI(searchQuery);
	state.search.requestCount += 1;
	state.search.results = data.results;
	state.search.query = searchQuery;
	determineCountOfPages(data);
	fixGenres();
	whichBeShownInSearchSection();
}

export const updateSearchPages = async function (pageNr = state.search.currentPage) {
	if (state.search.requestCount <= 3) {
		const data = await searchInAPI(state.search.query, state.search.requestCount);
		state.search.results.push(...data.results);
		state.search.requestCount += 1;
	}
	fixGenres();
	state.search.currentPage = pageNr;
	whichBeShownInSearchSection();
}