import React from "react";
import { withRouter, Link } from "react-router-dom";

const MainHeader = props => {
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/add_form">Add Restaurant</Link>
      </div>
    </nav>
  );
};

export default withRouter(MainHeader);
