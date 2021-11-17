import View from './View.js';


class RecommendedView extends View {
	_parentElement = document.querySelector('#recommendedMoviesContainer');
	_data = "";

	_createHtmlData() {
		return this._data.map(movie => {
			return `
			<li class="item">
			<a href="#${movie.imdbID}">
				<img src="${movie.Poster}"  class="poster" data-id=${movie.imdbID}>
				<details>
					<summary>
						<div>
							<h5>${movie.Title}</h5>
							<p class="Genre">${movie.Genre}</p>
						</div>
						<div>
							<i class="fas fa-star"></i><span class="rating">${movie.imdbRating}</span>
						</div>
					</summary>
				</details>
			</a>
			</li>
			`
		}).join('')
	}


	handlerAtLoad(handler) {
		window.addEventListener('load', handler);
	}


	addMultiSlider() {
		$('#recommendedMovies').multislider();
		$('#recommendedMovies').multislider('pause');
	}
}


export default new RecommendedView();