import React, { useEffect, useContext } from "react";
import "./Componetns/main.scss";
import Header from "./Componetns/Header/Header";
import Navbar from "./Componetns/Navbar/Navbar";
import Bookmarks from "./Componetns/Bookmarks/Bookmarks";
import Main from "./Componetns/Main";
import Context from "./context/context";

function App() {
    const ctx = useContext(Context);
    useEffect(() => {
        ctx.updateRecommended();
        ctx.updateSearchResult();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Bookmarks />
            <Main />
        </React.Fragment>
    );
}

export default App;
