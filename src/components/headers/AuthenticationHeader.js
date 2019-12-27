import React from "react";
import { Link } from "react-router-dom";

const AuthenticationHeader = () => {
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default AuthenticationHeader;
