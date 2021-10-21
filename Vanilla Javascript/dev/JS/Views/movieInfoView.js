import PreviewView from './preview.js';

class MoviesInfoView extends PreviewView {
	_data = "";

	_createHtmlData() {
		return this.generateHTMLCode()
	}

	updateData(data){
		this._data = data;
	}


	addBookmarkBtnHandler(handler) {
		this._parentElement.addEventListener('click', e => {
			if (e.target.closest('.bookmarkButton')) {
				if(this._data.bookmarked){
					document.querySelector('.bookmarkButton').innerHTML = '<i class="far fa-bookmark"></i>';
				}
				else{
					document.querySelector('.bookmarkButton').innerHTML = '<i class="fas fa-bookmark"></i>';
				}
				handler();
			}
		});
	}

}


export default new MoviesInfoView();