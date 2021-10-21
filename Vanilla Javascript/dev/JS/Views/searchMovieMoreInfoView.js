import PreviewView from './preview.js';

class searchMovieInfo extends PreviewView {
	_data = "";

	_createHtmlData() {
		let htmlCode = `<div>
							<button class="backButton">
								<i class="fas fa-arrow-left"></i>back
							</button>
						 </div>`
		htmlCode += this.generateHTMLCode();
		return htmlCode;
	}

	addBackButtonHandler(handler) {
		document.querySelector('.backButton').addEventListener('click', e => {
			handler();
		});
	}
}

export default new searchMovieInfo();