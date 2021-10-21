import React, { useContext } from "react";
import Context from "../../context/context";

const MovieInfo = () => {
    const ctx = useContext(Context);
    return (
        <section className="MovieInfo" id="moreInfo">
            <div>
                <button className="backButton">
                    <i className="fas fa-arrow-left"></i>back
                </button>
            </div>
            <figure>
                <img src={ctx.movieInfo.image} alt={ctx.movieInfo.name} />
            </figure>
            <div className="inforamtion">
                <div className="movieTitle">
                    <h3>{ctx.movieInfo.name}</h3>
                    <button className="bookmarkButton">
                        <i className="far fa-bookmark fa-2x"></i>
                    </button>
                </div>
                <div className="runTime">
                    <i className="far fa-clock"></i>
                    <span>{ctx.movieInfo.run_time}</span>
                </div>
                <ul>
                    <li>
                        Release:
                        <span className="movieRelease infoText">
                            {ctx.movieInfo.released_date}
                        </span>
                    </li>
                    <li>
                        Genre:
                        <span className="movieGenre infoText">
                            {ctx.movieInfo.genre.join(", ")}
                        </span>
                    </li>
                    <li>
                        Rating:
                        <span className="imdbVotes infoText">
                            {ctx.movieInfo.imdb_rating}
                        </span>
                        <i className="fab fa-imdb"></i>
                    </li>
                    <li>
                        Language:
                        <span className="language infoText">
                            {ctx.movieInfo.language}
                        </span>
                    </li>
                    <li>
                        <p className="summary">{ctx.movieInfo.summary}</p>
                    </li>
                    <li>
                        imdbID:
                        <span className="imdbID infoText">
                            {ctx.movieInfo.imdb_id}
                        </span>
                    </li>
                    <li className="actorsList">
                        <h3>Actors</h3>
                        <p className="actors">
                            {ctx.movieInfo.actors.join(", ")}
                        </p>
                    </li>
                    <a
                        href={`https://www.imdb.com/title/${ctx.movieInfo.imdb_id}/`}
                        className="redirecButton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See on IMDB website
                        <i className="fas fa-share-square fa"></i>
                    </a>
                </ul>
            </div>
        </section>
    );
};

export default MovieInfo;
