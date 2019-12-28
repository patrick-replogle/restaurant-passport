import React, { useEffect, useContext, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";
import { passportContext } from "../contexts/passportContext";
import RestaurantList from "./RestaurantList";
import MainHeader from "./headers/MainHeader";

const Dashboard = () => {
  const { user } = useContext(userContext);
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, [setRestaurantList]);

  return (
    <>
      <MainHeader search={search} setSearch={setSearch} />
      <div className="dashboardContainer">
        <h3 className="welcomeBack">{user}</h3>
        <RestaurantList
          restaurantList={restaurantList}
          setRestaurantList={setRestaurantList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
};

export default Dashboard;
