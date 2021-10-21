import * as modules from "./Module.js"
import RecommendedView from './Views/Recommended.js';
import MoviesInfoView from './Views/movieInfoView.js';
import SearchView from './Views/searchView.js';
import searchMovieInfo from './Views/searchMovieMoreInfoView.js';
import Pagination from './Views/pagination.js';
import Bookmarks from './Views/Bookmarks.js';



const loadRecommedation = async function () {
	await modules.updateRecommendedMovies();
	modules.state.bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	if(!modules.state.bookmarks){
		modules.state.bookmarks = [];
	}
	RecommendedView.render(modules.state.recommendedMovies);
	RecommendedView.addMultiSlider();
}


const backToSearchSection = function () {
	searchMovieInfo.clear();
	SearchView.show();
	Pagination.show();
}

const bookmarkMovie = function () {
	const movieInfo = {
		id: modules.state.movie.id,
		name: modules.state.movie.title,
		image: modules.state.movie.image,
		rating: modules.state.movie.rating
	}
	let movieAlreadyExist = false;
	for (let i = 0; i < modules.state.bookmarks.length; i++) {
		if (modules.state.bookmarks[i].id == movieInfo.id) {
			modules.state.bookmarks.splice(i, 1);
			modules.state.movie.bookmarked = false;
			movieAlreadyExist = true;
		}
	}
	if (!movieAlreadyExist) {
		modules.state.bookmarks.push(movieInfo);
		modules.state.movie.bookmarked = true;
	}
	MoviesInfoView.updateData(modules.state.movie);
	localStorage.setItem('bookmarks', JSON.stringify(modules.state.bookmarks));
	Bookmarks.render(modules.state.bookmarks);
}


const moreInfoAboutMovie = async function (id) {
	await modules.getMovie(id);

	if (modules.isID_imdbID(id)) {
		MoviesInfoView.render(modules.state.movie);
		SearchView.hide();
		Pagination.hide();
	}
	else {
		searchMovieInfo.render(modules.state.movie);
		searchMovieInfo.addBackButtonHandler(backToSearchSection);
		SearchView.hide();
		Pagination.hide();
	}
	MoviesInfoView.addBookmarkBtnHandler(bookmarkMovie);


}

const updatePage = async function (pageNr) {
	await modules.updateSearchPages(pageNr);
	SearchView.render(modules.state.search);
	Pagination.render(modules.state.search);
}

const loadSearchResults = async function (query) {
	await modules.getSearchResult(query);
	SearchView.render(modules.state.search);
	SearchView.clickMovieHandler(moreInfoAboutMovie);
	Pagination.render(modules.state.search);
	searchMovieInfo.clear();
	SearchView.show();
	Pagination.show();
	Pagination.eventHandler_changePage(updatePage);
}

const addBookmarks = function () {
	Bookmarks.render(modules.state.bookmarks);
}


const init = function () {
	RecommendedView.handlerAtLoad(loadRecommedation);
	RecommendedView.clickMovieHandler(moreInfoAboutMovie);
	Bookmarks.clickMovieHandler(moreInfoAboutMovie);
	SearchView.submitEventHandler(loadSearchResults);
	Bookmarks.addEventToBookmarkBtn(addBookmarks);
}

init();

if (module.hot) {
	module.hot.accept();
}

