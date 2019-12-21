import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

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
            name="first_name"
            placeholder="first name"
            value={registerData.first_name}
            required
          />

          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            placeholder="last name"
            value={registerData.last_name}
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
