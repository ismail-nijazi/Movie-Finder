import View from './View.js';

class Bookmarks extends View {
	_parentElement = document.querySelector('#bookmarksList');
	_bookmarks = document.querySelector('#Container');
	_data = [];
	_bookmarkButton = document.querySelector('#showBookmarksButton');

	_createHtmlData() {
		if (this._data.length == 0) {
			return `
				<li class="emptyBookmark">
					<div><i class="fas fa-frown fa-3x"></i></div>
					<h4>You didn't bookmarked any movies</h4>
				</li>
				`
		}
		return this._data.map(movie => {
			return `
			<li class="bookmark" data-id=${movie.id}>
			<a href="#${movie.id}" class="poster" data-id=${movie.id}>
				<img src="${movie.image ? movie.image : './images/noImage.png'}" >
				<div>
					<h5>${movie.name}</h5>
					${movie.rating ? '<i class="fas fa-star"></i>' : '<i class="rating">No rating found</i>'}<span class="rating">${movie.rating}</span>
				</div>
			</a>
			</li>
			`
		}).join('');

	}

	addEventToBookmarkBtn(handler) {
		this._bookmarkButton.addEventListener('click', () => {
			// if (this._bookmarks.classList.contains('bookmarksHidden')) {
			// 	this._bookmarks.classList.toggle('bookmarksHidden');
			// }
			// else {
			// 	this._bookmarks.classList.toggle('bookmarksHidden');
			// }
			this._bookmarks.classList.toggle('bookmarksHidden')
			handler();
		});
	}
}

export default new Bookmarks();