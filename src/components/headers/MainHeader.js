import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { passportContext } from "../../contexts/passportContext";

const MainHeader = props => {
  const { setItemToEdit, setIsEditing } = useContext(passportContext);
  const onSearchChange = e => {
    const { value } = e.target;
    props.setSearch(value);
  };
  return (
    <div className="mainHeader">
      <h1>Restaurant Passport</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={props.search}
          onChange={onSearchChange}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setItemToEdit({});
            setIsEditing(false);
            props.history.push("/add_form");
          }}
        >
          Add Restaurant
        </button>
        <button
          onClick={() => {
            localStorage.clear("token");
            props.history.push("/login");
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default withRouter(MainHeader);
