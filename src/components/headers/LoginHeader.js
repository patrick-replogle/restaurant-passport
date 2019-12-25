import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default LoginHeader;
