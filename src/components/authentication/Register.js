import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import AuthenticationHeader from "../headers/AuthenticationHeader";

const initialUser = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  city: "",
  email: ""
};

const Register = props => {
  const [registerData, setRegisterData] = useState(initialUser);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setisLoading(true);
    setError("");
    axiosWithAuth()
      .post("/auth/register", registerData)
      .then(res => {
        console.log(res);
        setisLoading(false);
        setRegisterData(initialUser);
        props.history.push("/login");
      })
      .catch(err => {
        setisLoading(false);
        console.log(err);
        setError(err.message);
      });
  };

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="primary" size="100px" />
      </div>
    );
  } else {
    return (
      <div className="registerContainer">
        <AuthenticationHeader />
        <h2>Register Below</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={registerData.username}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={registerData.password}
            required
          />

          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            name="first_name"
            placeholder="first name"
            value={registerData.first_name}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            id="lastName"
            placeholder="last name"
            value={registerData.last_name}
            required
          />

          <label htmlFor="city">City</label>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            placeholder="city"
            value={registerData.city}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={registerData.email}
            required
          />
          <div className="termsOfServiceDiv">
            <p>
              <span>
                By signing up, you agree to Restaurant Passports's{" "}
                <font color="FF4081">
                  <a
                    href="www.yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  ,{" "}
                  <a
                    href="www.yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  <font color="757575">and</font>{" "}
                  <a
                    href="www.yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                </font>
              </span>
            </p>
          </div>

          <button className="loginBtn">Submit</button>
          <button
            className="loginBtn"
            onClick={() => setRegisterData(initialUser)}
          >
            Reset
          </button>
        </form>
        {error && <div className="errorMessage">{error}</div>}
      </div>
    );
  }
};

export default Register;
