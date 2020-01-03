import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";

import { passportContext } from "../../contexts/passportContext";

const CardHeader = props => {
  const { setItemToEdit, setIsEditing } = useContext(passportContext);
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <div>
        <Link to="/dashboard">Home</Link>
        <button
          onClick={() => {
            setItemToEdit({});
            setIsEditing(false);
            props.history.push("/add_form");
          }}
        >
          Add Restaurant
        </button>
      </div>
    </nav>
  );
};

export default withRouter(CardHeader);
