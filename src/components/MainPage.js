import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const MainPage = props => {
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/something")
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log("Error fetching: ", err));
  // }, []);
  return (
    <div>
      <h1>main page</h1>
    </div>
  );
};

export default MainPage;
