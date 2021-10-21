import React, { useContext, useRef, useEffect } from "react";
import Context from "../../context/context";
import BookmarkMovie from "./BookmarkMovie";

const Bookmarks = () => {
    const ctx = useContext(Context);
    const bookmarksElement = useRef();
    const bookmarkedMovies = () => {
        return ctx.bookmarkedMovies.map((movie) => {
            return <BookmarkMovie movie={movie} key={movie.imdb_id} />;
        });
    };

    useEffect(() => {
        ctx.setBookmarksRef(bookmarksElement);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="bookmarksContainer">
            <div ref={bookmarksElement} className="bookmarks bookmarksHidden">
                <h4 className="bookmarkTitle">Bookmarks</h4>
                <ul id="bookmarksList">{bookmarkedMovies()}</ul>
                {ctx.bookmarkedMovies.length === 0 ? (
                    <h3 className="emptyBookmark">You have no bookmark</h3>
                ) : (
                    ""
                )}
                <div className="Line"></div>
            </div>
        </section>
    );
};

export default Bookmarks;
