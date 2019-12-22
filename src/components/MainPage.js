import React, { useEffect, useContext, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";
import { passportContext } from "../contexts/passportContext";
import RestaurantList from "./RestaurantList";
import Header from "./Header";

const MainPage = props => {
  const { user } = useContext(userContext);
  const {
    restaurantList,
    setRestaurantList,
    setFilteredList,
    filteredList
  } = useContext(passportContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, [setRestaurantList]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <p>{user}</p>
      <RestaurantList
        restaurantList={restaurantList}
        setRestaurantList={setRestaurantList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default MainPage;
