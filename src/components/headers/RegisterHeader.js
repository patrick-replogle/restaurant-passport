import React from "react";
import { Link } from "react-router-dom";

const RegisterHeader = () => {
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default RegisterHeader;
