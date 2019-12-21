import React, { useEffect, useContext } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";

const MainPage = props => {
  const { user } = useContext(userContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, []);

  return (
    <div>
      <p>{user}</p>
      <h1>main page</h1>
    </div>
  );
};

export default MainPage;
