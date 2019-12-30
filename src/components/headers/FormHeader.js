import React from "react";
import { withRouter, Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <div>
        <Link to="/dashboard">Home</Link>
      </div>
    </nav>
  );
};

export default withRouter(MainHeader);
