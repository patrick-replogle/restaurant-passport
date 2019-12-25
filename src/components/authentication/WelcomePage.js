import React from "react";

const WelcomePage = props => {
  return (
    <div className="welcomePageContainer">
      <h1>Restaurant Passport</h1>
      <h3>Travel. Eat. Compare.</h3>
      <button
        className="welcomePageBtn"
        onClick={() => props.history.push("/register")}
      >
        Register
      </button>
      <p>Already Have an Account?</p>
      <button
        className="welcomePageBtn2"
        onClick={() => props.history.push("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default WelcomePage;
