import React, { useEffect, useContext, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";
import { passportContext } from "../contexts/passportContext";
import RestaurantList from "./restaurants/RestaurantList";
import MainHeader from "./headers/MainHeader";

const Dashboard = () => {
  const { user } = useContext(userContext);
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setIsLoading(false);
        setRestaurantList(res.data.reverse());
      })
      .catch(err => {
        setIsLoading(false);
        console.log("Error fetching: ", err);
      });
  }, [setRestaurantList]);

  return (
    <div className="dashboardContainer">
      <MainHeader search={search} setSearch={setSearch} />
      <div className="welcomeBack">{user}</div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress color="primary" size="100px" />
        </div>
      ) : (
        <RestaurantList
          restaurantList={restaurantList}
          setRestaurantList={setRestaurantList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          search={search}
          setSearch={setSearch}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Dashboard;
