import React, { useState } from "react";

const Context = React.createContext();

export default Context;
export const Provider = (props) => {
    const [isLogedIn, login] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [recommendedMovies, updateRecommendedMovies] = useState([]);
    const [watchListRef, updateWatchListRef] = useState(null);
    const [userSection, updateUserSectionRef] = useState(null);
    const [loginRef, updateLoginRef] = useState(null);
    const [registerRef, updateRegisterRef] = useState(null);
    const [currentMovie, changeCurrentMovie] = useState({});
    const [watchListMovies, updateWatchList] = useState([]);

    const updateRecommended = () => {
        const url = `http://127.0.0.1:8000/recommend/`;
        let result = fetch(url);
        result.then((response) => {
            response.json().then((data) => {
                updateRecommendedMovies(data);
            });
        });
    };

    const resetWatchList = () => {
        updateWatchList([]);
    };

    const updateWatchListMovies = () => {
        const url = `http://127.0.0.1:8000/user/watchList`;
        const token = JSON.parse(localStorage.getItem("findMovieToken"));
        let result = fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        result.then((response) => {
            response.json().then((data) => {
                updateWatchList(data);
            });
        });
    };

    const getCurrentMovie = (id) => {
        const url = `http://127.0.0.1:8000/movie/${id}`;
        let result = fetch(url, {});
        result.then((response) => {
            response.json().then((data) => {
                changeCurrentMovie(data.result);
            });
        });
    };

    let value = {
        isLogedIn: [isLogedIn, login],
        watchListRef: watchListRef,
        updateWatchListRef: updateWatchListRef,
        userSection: [userSection, updateUserSectionRef],
        loginRef: [loginRef, updateLoginRef],
        registerRef: [registerRef, updateRegisterRef],
        watchListMovies: [watchListMovies, updateWatchListMovies],
        resetWatchList: resetWatchList,
        recommendedMovie: recommendedMovies,
        updateRecommended: updateRecommended,
        movieInfo: currentMovie,
        changeCurrentMovie: getCurrentMovie,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
