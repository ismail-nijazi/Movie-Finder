export default class View {
	render(data) {
		this._data = data;
		const htmlToBeAdded = this._createHtmlData();
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML('beforeend', htmlToBeAdded)
	}

	clickMovieHandler(handler) {
		this._parentElement.addEventListener('click', e => {
			if(e.target.closest('.poster')){
				document.querySelector('#moreInfo').scrollIntoView();
				handler(e.target.dataset.id);
			}
		});
	}
}