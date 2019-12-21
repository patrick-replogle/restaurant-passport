import React, { useEffect, useContext } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";
import { passportContext } from "../contexts/passportContext";
import RestaurantList from "./RestaurantList";

const MainPage = props => {
  const { user } = useContext(userContext);
  const { restaurantList, setRestaurantList } = useContext(passportContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        console.log(res);
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, []);

  return (
    <div>
      <p>Welcome back {user}</p>
      <RestaurantList
        restaurantList={restaurantList}
        setRestaurantList={setRestaurantList}
      />
    </div>
  );
};

export default MainPage;
