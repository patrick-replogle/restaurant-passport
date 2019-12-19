import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "@material-ui/core";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
  name: "",
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
      .post("/register", registerData)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        setisLoading(false);
        setRegisterData(initialUser);
        props.history.push("/login");
      })
      .catch(err => {
        setisLoading(false);
        console.log("Error registering: ", err);
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
            type="text"
            name="username"
            placeholder="username"
            value={registerData.username}
            required
          />

          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={registerData.password}
            required
          />

          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="name"
            value={registerData.name}
            required
          />

          <input
            onChange={handleChange}
            type="text"
            name="city"
            placeholder="city"
            value={registerData.city}
            required
          />

          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email"
            value={registerData.email}
            required
          />

          <button>Submit</button>
          <button onClick={() => setRegisterData(initialUser)}>Reset</button>
        </form>
        {error && <div className="errorMessage">{error}</div>}
      </div>
    );
  }
};

export default Register;
