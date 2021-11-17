import React, { useContext, useState } from "react";
import movieInfoContext from "../../context/search_MovieInfo_context";


const Searchbar = () => {
    const ctx = useContext(movieInfoContext);
    const [error, setError] = useState(false);
    const getSearchResult = (event) => {
        event.preventDefault();
        if (event.target.search.value.length > 2) {
            ctx.loading[1](true);
            const url = `http://127.0.0.1:8000/search/${event.target.search.value}/${ctx.searchResult.current_page}`;
            let result = fetch(url);
            result.then((response) => {
                response.json().then((data) => {
                    ctx.updateSearchResult({
                        searchQuery: event.target.search.value,
                        current_page: data.currentPage,
                        total_pages: data.totalPages,
                        movies: data.result,
                    });
                });
            });
            ctx.showSeachResultSection(
                ctx.movieInfoSectionRef.current,
                ctx.searchResultSectionRef.current
            );
            setError(false);
            ctx.loading[1](false);
            ctx.searchResultSectionRef.current.scrollIntoView();
        } else {
            setError(true);
        }
    };
    return (
        <section className="searchContainer">
            <form
                method="POST"
                className="searchForm"
                onSubmit={getSearchResult}
            >
                {error && (
                    <label htmlFor="search" className="error">
                        {" "}
                        The search query should at least be 3 charecter!
                    </label>
                )}
                <div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="search"
                        placeholder="Search movie ..."
                    />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Searchbar;
