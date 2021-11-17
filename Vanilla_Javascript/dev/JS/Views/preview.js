import View from './View.js';

export default class PreviewView extends View {
	_parentElement = document.querySelector('#moreInfo');

	generateHTMLCode() {
		return `
			<figure>
				<img src="${this._data.image ? this._data.image : './images/noImage.png'}">
			</figure>
			<div class="inforamtion">
				<div class="movieTitle">
					<h3>${this._data.title}</h3>
					<button class="bookmarkButton" data-id=${this._data.id}>
						${this._data.bookmarked ? '<i class="fas fa-bookmark"></i>' : '<i class="far fa-bookmark"></i>'}
					</button>
				</div>	
				<div class="runTime">
					<i class="far fa-clock"></i>
					<span>${this._data.duration}</span>
				</div>
				<ul>
					<li>
						Release:
						<span class="movieRelease infoText">${this._data.released}</span>
					</li>
					<li>
						Genre:
						<span class="movieGenre infoText">${this._data.genre}</span>
					</li>
					<li>
						Rating:
						<span class="imdbVotes infoText">${this._data.rating}</span>
						<i class="fab fa-imdb"></i>
					</li>
					<li>
						Language:
						<span class="language infoText">${this._data.language}</span>
					</li>
					<li>
						<p class="summary">${this._data.summary}</p>
					</li>
					<li>
						imdbID:
						<span class="imdbID infoText">${this._data.imdbID}</span>
					</li>
					<li class="actorsList">
						<h3>Actors</h3>
						<p class="actors">${this._data.actors}</p>
					</li>
				</ul>
				<a href="https://www.imdb.com/title/${this._data.imdbID}/" class="redirecButton" target="_blanck">See on IMDB website<i
						class="fas fa-share-square fa"></i></a>
			</div>
		`
	}

	clear() {
		this._parentElement.innerHTML = '';
	}
}
