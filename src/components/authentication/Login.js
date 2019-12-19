import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialLoginState = {
  username: "",
  password: ""
};

const Login = props => {
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
      .post("/login", signInData)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            value={signInData.username}
            required
          />

          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={signInData.password}
            required
          />

          <button>Submit</button>
        </form>
        {error && (
          <div className="errorMessage">username or password not valid</div>
        )}
      </div>
    );
  }
};

export default Login;
