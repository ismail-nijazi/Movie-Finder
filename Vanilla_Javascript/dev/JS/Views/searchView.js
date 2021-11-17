import View from './View.js';

class SearchView extends View {
	_parentElement = document.querySelector('.searchResults');
	_data = "";
	_searchForm = document.querySelector('.searchForm');


	hide() {
		this._parentElement.classList.add('hidden');
	}

	show() {
		this._parentElement.classList.remove('hidden');
	}

	getSearchQeury() {
		const query = this._searchForm.querySelector('.search').value;
		this._searchForm.querySelector('.search').value = '';
		return query;
	}

	_createMoviePosters() {
		return this._data.toBeShown.map(movie => {
			return `
			<li class="item" >
			<a href="#${movie.id}">
				<img src="${movie.poster_path ? movie.poster_path : './images/noImage.png'}" class="poster" data-id=${movie.id}>
				<details>
					<summary>
						<div>
							<h5>${movie.title}</h5>
							<p class="Genre">${movie.genre_ids}</p>
						</div>
						<div>
						<i class="fas fa-star"></i><span class="rating">${movie.vote_average}</span>
						</div>
					</summary>
				</details>
			</a>
			</li>
			`
		}).join('')
	}

	_createHtmlData() {
		return `<h5>Results of: <span class="searchQuery">" ${this._data.query} "</span></h5>
			<ul>${this._createMoviePosters()}</ul>
		`;
	}

	submitEventHandler(handler) {
		this._searchForm.addEventListener('submit', e => {
			e.preventDefault();
			handler(this.getSearchQeury());
		})
	}


}


export default new SearchView();