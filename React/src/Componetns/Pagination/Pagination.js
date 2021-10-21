import React from "react";

const Pagination = () => {
    return (
        <section className="pagination">
            <ul>
                <li className="previous">
                    <i className="fas fa-caret-left fa-2x"></i>
                </li>
                <li className="activePage">1</li>
                <li className="morepages">...</li>
                <li>3</li>
                <li>4</li>
                <li className="morepages">...</li>
                <li>8</li>
                <li className="next">
                    <i className="fas fa-caret-right fa-2x"></i>
                </li>
            </ul>
        </section>
    );
};

export default Pagination;
