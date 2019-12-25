import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const MainHeader = props => {
  const [showSearch, setShowSearch] = useState(false);

  const onSearchChange = e => {
    const { value } = e.target;
    props.setSearch(value);
  };
  return (
    <div className="headerContainer">
      <div className="header">
        <h2>Restaurant Passport 2.0</h2>
        <button
          className="addBtn"
          onClick={() => props.history.push("/add_form")}
        >
          +
        </button>
        <button onClick={() => setShowSearch(!showSearch)}>Search</button>
      </div>
      {showSearch && (
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={props.search}
            onChange={onSearchChange}
          />
          <button
            onClick={() => {
              setShowSearch(false);
              props.setSearch("");
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(MainHeader);
