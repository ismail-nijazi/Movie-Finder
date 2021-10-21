import React from "react";
import MovieInfo from "./MovieInfo/MovieInfo";
import Searchbar from "./Searchbar/Searchbar";
import SearchResult from "./SearchResult/SearchResult";

const Main = () => {
    return (
        <main>
            <Searchbar />
            <MovieInfo />
            <SearchResult />
        </main>
    );
};

export default Main;
