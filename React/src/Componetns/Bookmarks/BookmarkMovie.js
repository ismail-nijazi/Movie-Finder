import React from "react";

const BookmarkMovie = (props) => {
    return (
        <li className="bookmark">
            <a href="/#">
                <img src={props.movie.image} alt={props.movie.name} />
                <div>
                    <h5>{props.movie.name}</h5>
                    <i className="fas fa-star"></i>
                    <span className="rating">{props.movie.imdb_rating}</span>
                </div>
            </a>
        </li>
    );
};

export default BookmarkMovie;
