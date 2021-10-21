import React, { useContext } from "react";
import Context from "../../context/context";

const Navbar = () => {
    const ctx = useContext(Context);
    const toggleBookmarks = () => {
        ctx.bookmarksRef.current.classList.toggle("bookmarksHidden");
    };
    return (
        <nav>
            <figure className="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="Movie Finder" />
                </a>
            </figure>
            <button id="showBookmarksButton" onClick={toggleBookmarks}>
                <i className="fas fa-bookmark fa-2x"></i>
            </button>
        </nav>
    );
};

export default Navbar;
