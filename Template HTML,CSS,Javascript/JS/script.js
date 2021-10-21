const bookmarkButton = document.querySelector("#showBookmarksButton");
const bookmarks = document.querySelector("#bookmarks");

bookmarkButton.addEventListener("click", () => {
    bookmarks.classList.toggle("bookmarksHidden");
});

$("#recommendedMovies").multislider();
$("#recommendedMovies").multislider("pause");
