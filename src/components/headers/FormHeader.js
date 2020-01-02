import React, { useContext } from "react";

import { passportContext } from "../../contexts/passportContext";
import { withRouter } from "react-router-dom";

const FormHeader = props => {
  const { setIsEditing, setItemToEdit } = useContext(passportContext);
  return (
    <nav className="header">
      <h1>Restaurant Passport</h1>
      <div>
        <button
          onClick={() => {
            setItemToEdit({});
            setIsEditing(false);
            props.history.push("/dashboard");
          }}
        >
          Home
        </button>
      </div>
    </nav>
  );
};

export default withRouter(FormHeader);
