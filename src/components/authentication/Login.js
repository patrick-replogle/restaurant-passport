import React, { useState, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { userContext } from "../../contexts/userContext";
import LoginHeader from "../headers/LoginHeader";

const initialLoginState = {
  username: "",
  password: ""
};

const Login = props => {
  const { setUser } = useContext(userContext);
  const [signInData, setSignInData] = useState(initialLoginState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    axiosWithAuth()
      .post("/auth/login", signInData)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setUser(res.data.message);
        setIsLoading(false);
        setSignInData(initialLoginState);
        props.history.push("/dashboard");
      })
      .catch(err => {
        setIsLoading(false);
        console.log("error loggin in: ", err);
        setError(err.message);
      });
  };

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="secondary" />
      </div>
    );
  } else {
    return (
      <div className="loginContainer">
        <LoginHeader />
        <h2>Login Below</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            name="username"
            id="username"
            type="text"
            placeholder="username"
            value={signInData.username}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={signInData.password}
            required
          />

          <button className="loginBtn">Submit</button>
        </form>
        {error && (
          <div className="errorMessage">username or password not valid</div>
        )}
      </div>
    );
  }
};

export default Login;
