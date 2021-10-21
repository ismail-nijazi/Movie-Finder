// const bookmarkButton = document.querySelector("#showBookmarksButton");
// const bookmarks = document.querySelector("#bookmarks");

// bookmarkButton.addEventListener("click", () => {
//     bookmarks.classList.toggle("bookmarksHidden");
// });

// const script = document.createElement("script");
// script.src = "multislider.js";
// script.async = true;
// document.body.appendChild(script);

window.addEventListener("load", (e) => {
    console.log("!#€#€");
    document.querySelector("#recommendedMovies").multislider();
    document.querySelector("#recommendedMovies").multislider("pause");
    console.log("HELLO");
});
