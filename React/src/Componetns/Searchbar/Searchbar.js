import React from "react";

const Searchbar = () => {
    return (
        <section className="searchContainer">
            <form className="searchForm">
                <div>
                    <input
                        type="text"
                        className="search"
                        placeholder="Search movies ..."
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
