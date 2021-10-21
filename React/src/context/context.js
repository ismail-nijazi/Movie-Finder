import React, { useState } from "react";

const Context = React.createContext({
    bookmarksRef: null,
    setBookmarksRef: () => {},
    recommendedMovie: [],
    updateRecommended: () => {},
    searchResult: {},
    updateSearchResult: () => {},
    bookmarkedMovies: [],
    movieInfo: {},
});

export default Context;
export const Provider = (props) => {
    const [recommendedMovies, updateRecommendedMovies] = useState([]);
    const [searchResultState, updateSearch] = useState({
        current_page: 0,
        total_pages: 0,
        movies: [],
    });
    const [bookmarksRef, updateBookmarksRef] = useState(null);
    const currentMovie = {
        name: "interstellar",
        image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
        genre: ["Adventure", "Drama", "Sci-Fi"],
        imdb_rating: "8.3",
        imdb_id: "tt2493486",
        run_time: 115,
        released_date: "03 Apr 2015",
        language: "English",
        summary: `A fallen warrior rises against a corrupt and
                    sadistic ruler to avenge his dishonored master in a
                    sword-clashing adventure of loyalty, honor, and
                    vengeance.`,
        actors: ["Clive Owen", "Morgan Freeman", "Cliff Curtis, Aksel Hennie"],
    };
    const updateSearchResult = () => {
        updateSearch({
            current_page: "1",
            total_pages: "1",
            movies: [
                {
                    name: "interstellar",
                    image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
                    genre: ["Adventure", "Drama", "Sci-Fi"],
                    imdb_rating: "8.3",
                    imdb_id: 1,
                },
                {
                    name: "Avengers: Endgame - Journey's End",
                    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
                    genre: ["Adventure", "Drama", "Sci-Fi"],
                    imdb_rating: "8.7",
                    imdb_id: 2,
                },
                {
                    name: "Cruella",
                    image: "https://image.tmdb.org/t/p/w780/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
                    genre: ["Drama", "Action"],
                    imdb_rating: "6.7",
                    imdb_id: 3,
                },
                {
                    name: "interstellar",
                    image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
                    genre: ["Adventure", "Drama", "Sci-Fi"],
                    imdb_rating: "8.3",
                    imdb_id: 4,
                },
                {
                    name: "Avengers: Endgame - Journey's End",
                    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
                    genre: ["Adventure", "Drama", "Sci-Fi"],
                    imdb_rating: "8.7",
                    imdb_id: 5,
                },
                {
                    name: "Cruella",
                    image: "https://image.tmdb.org/t/p/w780/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
                    genre: ["Drama", "Action"],
                    imdb_rating: "6.7",
                    imdb_id: 6,
                },
            ],
        });
    };

    const bookmarkeds = [
        {
            name: "interstellar",
            image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
            genre: ["Adventure", "Drama", "Sci-Fi"],
            imdb_rating: "8.3",
            imdb_id: 1,
        },
        {
            name: "Avengers: Endgame - Journey's End",
            image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
            genre: ["Adventure", "Drama", "Sci-Fi"],
            imdb_rating: "8.7",
            imdb_id: 2,
        },
    ];

    const updateRecommended = () => {
        const recommendedMovies = [
            {
                name: "interstellar",
                image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
                genre: ["Adventure", "Drama", "Sci-Fi"],
                imdb_rating: "8.3",
                imdb_id: 1,
            },
            {
                name: "Avengers: Endgame - Journey's End",
                image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
                genre: ["Adventure", "Drama", "Sci-Fi"],
                imdb_rating: "8.7",
                imdb_id: 2,
            },
            {
                name: "Cruella",
                image: "https://image.tmdb.org/t/p/w780/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
                genre: ["Drama", "Action"],
                imdb_rating: "6.7",
                imdb_id: 3,
            },
            {
                name: "interstellar",
                image: "https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg",
                genre: ["Adventure", "Drama", "Sci-Fi"],
                imdb_rating: "8.3",
                imdb_id: 4,
            },
            {
                name: "Avengers: Endgame - Journey's End",
                image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
                genre: ["Adventure", "Drama", "Sci-Fi"],
                imdb_rating: "8.7",
                imdb_id: 5,
            },
            {
                name: "Cruella",
                image: "https://image.tmdb.org/t/p/w780/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
                genre: ["Drama", "Action"],
                imdb_rating: "6.7",
                imdb_id: 6,
            },
        ];
        updateRecommendedMovies(recommendedMovies);
    };

    let value = {
        bookmarksRef: bookmarksRef,
        setBookmarksRef: updateBookmarksRef,
        recommendedMovie: recommendedMovies,
        updateRecommended: updateRecommended,
        searchResult: searchResultState,
        updateSearchResult: updateSearchResult,
        bookmarkedMovies: bookmarkeds,
        movieInfo: currentMovie,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
