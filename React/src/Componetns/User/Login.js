import React, { useContext, useRef, useEffect, useState } from "react";
import Context from "../../context/context";
import Register from "./Register";
import axios from "axios";

const Login = () => {
    const ctx = useContext(Context);
    const loginRef = useRef();
    const userSection = useRef();
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        ctx.loginRef[1](loginRef);
        ctx.userSection[1](userSection);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const login = (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/user/login`;
        const sendLogin = (url) => {
            axios({
                method: "POST",
                url: url,
                data: {
                    username: username,
                    password: password,
                },
            })
                .catch(function (e) {
                    const err = e.toJSON();
                    if (err.status === 400) {
                        setError((prev) => {
                            return {
                                ...prev,
                                error: true,
                                message: "Username or password incorrect",
                            };
                        });
                    } else {
                        setError((prev) => {
                            return {
                                ...prev,
                                error: true,
                                message: "Something went wrong!",
                            };
                        });
                    }
                })
                .then((response) => {
                    if (response) {
                        localStorage.setItem(
                            "findMovieToken",
                            JSON.stringify(response.data.token)
                        );
                        ctx.isLogedIn[1](true);
                        ctx.userSection[0].current.classList.add("hide");
                        ctx.watchListMovies[1]();
                        resetFields();
                    }
                });
        };
        sendLogin(url);
    };
    const resetFields = () => {
        setUsername("");
        setPassword("");
    };

    const showRegister = (e) => {
        ctx.loginRef[0].current.classList.add("hide");
        ctx.registerRef[0].current.classList.remove("hide");
    };

    const loginSectionEvent = (e) => {
        if (e.target.classList.contains("LoginPage")) {
            ctx.userSection[0].current.classList.toggle("hide");
        }
    };

    return (
        <section
            className="LoginPage hide"
            ref={userSection}
            onClick={loginSectionEvent}
        >
            <div className="LoginForm" ref={loginRef}>
                <figure className="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt="Movie Finder" />
                    </a>
                </figure>
                <h3>Login</h3>
                <form method="POST" onSubmit={login}>
                    {error.error && (
                        <p class="error_message">{error.message}</p>
                    )}
                    <div className="row">
                        <input
                            name="username"
                            type="text"
                            placeholder="Username or Email"
                            onChange={changeUsername}
                            value={username}
                        />
                    </div>
                    <div className="row">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={changePassword}
                            value={password}
                        />
                    </div>
                    <button type="submit" className="btn">
                        {" "}
                        Login{" "}
                    </button>
                    <div className="row">
                        <button
                            className="link"
                            type="button"
                            onClick={showRegister}
                        >
                            Register
                        </button>
                        <a href="/#"> Forgot your password?</a>
                    </div>
                </form>
            </div>
            <Register />
        </section>
    );
};

export default Login;
