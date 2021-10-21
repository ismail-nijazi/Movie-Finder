import React from "react";

const Movie = (props) => {
    return (
        <li className="item">
            <img src={props.movie.image} alt={props.movie.name} />
            <details>
                <summary>
                    <div>
                        <h5>{props.movie.name}</h5>
                        <p className="Genre">{props.movie.genre.join(", ")}</p>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <span className="rating">
                            {props.movie.imdb_rating}
                        </span>
                    </div>
                </summary>
            </details>
        </li>
    );
};

export default Movie;
