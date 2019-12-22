import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Main</NavLink>
      <NavLink to="/add_form">Add</NavLink>
    </div>
  );
};

export default Nav;
