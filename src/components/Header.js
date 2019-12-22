import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Header = props => {
  const [showSearch, setShowSearch] = useState(false);

  const onSearchChange = e => {
    const { value } = e.target;
    props.setSearch(value);
  };
  return (
    <div>
      <h3>Restaurant Passport 2.0</h3>
      <button onClick={() => props.history.push("/add_form")}>+</button>
      <button onClick={() => setShowSearch(!showSearch)}>Search</button>
      {showSearch && (
        <div className="seach">
          <input
            type="text"
            placeholder="Search"
            value={props.search}
            onChange={onSearchChange}
          />
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
