import React, { useEffect } from "react";
import "./Componetns/main.scss";
import Header from "./Componetns/Header/Header";
import Navbar from "./Componetns/Navbar/Navbar";
import WatchList from "./Componetns/WatchList/WatchList";
import Main from "./Componetns/Main";
import Login from "./Componetns/User/Login";
import { Provider } from "./context/search_MovieInfo_context";

function App() {

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "./jquery-3-6.min.js";
        jquery.async = true;
        document.body.appendChild(jquery);
        const multisliderFile = document.createElement("script");
        multisliderFile.src = "multislider.min.js";
        multisliderFile.async = true;
        document.body.appendChild(multisliderFile);
        setTimeout(() => {
            const script = document.createElement("script");
            script.src = "script.js";
            script.async = true;
            document.body.appendChild(script);
		}, 500);
		
	}, []);
	
    return (
        <Provider>
            <Navbar />
            <Header />
            <WatchList />
            <Main />
			<Login />
        </Provider>
    );
}

export default App;
