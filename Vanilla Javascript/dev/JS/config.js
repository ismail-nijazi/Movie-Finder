export const API_URL_OMDb = 'http://www.omdbapi.com/';
export const API_URL_OMDb_Key = 'fc34f22f';
export const SEARCH_API_URL = 'https://advanced-movie-search.p.rapidapi.com/';
export const countOfRecommendedMovies = 8;
export const countOfResultsInPage = 10;//Result section
export const GenresList = [{ id: 28, name: "Action" },
{ id: 16, name: "Animation" },
{ id: 35, name: "Comedy" },
{ id: 80, name: "Crime" },
{ id: 99, name: "Documentary" },
{ id: 18, name: "Drama" },
{ id: 10751, name: "Family" },
{ id: 14, name: "Fantasy" },
{ id: 36, name: "History" },
{ id: 27, name: "Horror" },
{ id: 10402, name: "Music" },
{ id: 9648, name: "Mystery" },
{ id: 10749, name: "Romance" },
{ id: 878, name: "Science Fiction" },
{ id: 10770, name: "TV Movie" },
{ id: 53, name: "Thriller" },
{ id: 10752, name: "War" },
{ id: 37, name: "Western" },
];

export const Movies = [ //Recommended Movies
	{ name: 'interstellar', year: 2014 },
	{ name: 'Parasite', year: 2019 },
	{ name: 'The Dark Knight', year: 2008 },
	{ name: 'Ava', year: 2020 },
	{ name: 'Hunter Killer', year: 2018 },
	{ name: 'Extinction ', year: 2018 },
	{ name: 'Last Knights', year: 2015 },
	{ name: 'Knock Knock', year: 2015 }
];

export const APIRequesOption = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dae55974a6msh002ddfd4c6343eep115995jsn1a586806b5f7',
		'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
	}
};
