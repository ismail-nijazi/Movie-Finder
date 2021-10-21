import React, { useContext } from "react";
import Pagination from "../Pagination/Pagination";
import Context from "../../context/context";
import Movie from "../Movie";

const SearchResult = () => {
    const ctx = useContext(Context);
    const generateMoviesList = () => {
        return ctx.searchResult.movies.map((item) => {
            return <Movie movie={item} key={item.imdb_id} />;
        });
    };
    return (
        <section className="searchResultsSection">
            <h5>
                Results of: <span className="searchQuery">"Results"</span>
            </h5>
            <ul className="searchResults hidden">{generateMoviesList()}</ul>
            <Pagination />
        </section>
    );
};

export default SearchResult;
