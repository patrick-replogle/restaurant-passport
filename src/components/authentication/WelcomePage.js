import React from "react";

const WelcomePage = props => {
  return (
    <div>
      <button onClick={() => props.history.push("/register")}>Register</button>
      <button onClick={() => props.history.push("/login")}>Login</button>
    </div>
  );
};

export default WelcomePage;
