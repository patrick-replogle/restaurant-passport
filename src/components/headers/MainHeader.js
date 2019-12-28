import React from "react";
import { withRouter, Link } from "react-router-dom";

const MainHeader = props => {
  const onSearchChange = e => {
    const { value } = e.target;
    props.setSearch(value);
  };
  return (
    <div className="mainHeader">
      <h1>Restaurant Passport 2.0</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={props.search}
          onChange={onSearchChange}
        />
        <button
          onClick={() => {
            props.setSearch("");
          }}
        >
          Cancel
        </button>
      </div>
      <Link to="/add_form">Add Restaurant</Link>
    </div>
  );
};

export default withRouter(MainHeader);
