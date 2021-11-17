import View from './View.js';

class Pagination extends View {
	_parentElement = document.querySelector('.pagination > ul');
	_data = {};

	hide() {
		this._parentElement.classList.add('hidden');
	}

	show() {
		this._parentElement.classList.remove('hidden');
	}

	_createHtmlData() {
		const page = this._data.currentPage;
		const totall = this._data.countOfPages;
		let prevPage = page - 1;
		let nextPage = page + 1;
		let active = '';
		let htmlTemplate = '';

		if (page > 1) {
			htmlTemplate += `
				<li class="previous pageNumber" data-page-number=${page - 1}>
					<i class="fas fa-caret-left fa-2x pageNumber"  data-page-number=${page - 1}></i>
				</li>
			`;
		}

		// if (page == totall) {
		// 	prevPage = prevPage - 2;
		// } else if (page == totall - 1) {
		// 	prevPage = prevPage - 1;
		// }
		// how many pages or li show after the current li
		// if (page == 1) {
		// 	nextPage = nextPage + 2;
		// } else if (page == 2) {
		// 	nextPage = nextPage + 1;
		// }

		if (page > 2) {
			htmlTemplate += `<li class='pageNumber' data-page-number=1>1 </li>`;
			if (page > 3) {
				htmlTemplate += `<li class="morepages">...</li>`;
			}
		}

		for (let pageNum = prevPage; pageNum <= nextPage; pageNum++) {
			if (pageNum > totall) {
				continue;
			}
			if (pageNum == 0) {
				pageNum += 1;
			}
			if (page == pageNum) {
				active = 'activePage';
			}
			else {
				active = '';
			}

			htmlTemplate += `<li class= 'pageNumber ${active}' data-page-number=${pageNum}> ${pageNum}</li>`;
		}

		if (page < totall - 1) {
			if (page < totall - 2) {
				htmlTemplate += `<li class="morepages">...</li>`
			}
			htmlTemplate += `<li class="pageNumber" data-page-number=${totall} > ${totall} </li >`;
		}

		if (page < totall) {
			htmlTemplate += `<li class="next pageNumber" data-page-number=${page + 1}>
								<i class="fas fa-caret-right fa-2x pageNumber"  data-page-number=${page + 1}> </i>
							</li>`;
		}
		return htmlTemplate;
	}

	eventHandler_changePage(handler) {
		this._parentElement.addEventListener('click', e => {
			if (e.target.classList.contains('pageNumber')) {
				document.querySelector('.searchResultsSection').scrollIntoView();
				handler(+e.target.dataset.pageNumber)
			}
		})
	}
}


export default new Pagination();
