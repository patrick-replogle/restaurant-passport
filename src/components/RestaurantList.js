import React, { useEffect } from "react";

import RestaurantLink from "./RestaurantLink";

const Restaurantlist = ({
  search,
  restaurantList,
  filteredList,
  setFilteredList,
  isLoading
}) => {
  useEffect(() => {
    setFilteredList(
      restaurantList.filter(name =>
        name.restaurant_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, setFilteredList, restaurantList]);

  const dynamicArray = filteredList.length
    ? filteredList
    : restaurantList.sort((a, b) => b.restaurant_rating - a.restaurant_rating);

  if (!isLoading && restaurantList.length < 1) {
    return (
      <div className="restarauntListContainer">
        <h2>Add Some Passport Entries!</h2>
      </div>
    );
  } else {
    return (
      <div className="restarauntListContainer">
        {dynamicArray.map(restaurant => {
          return <RestaurantLink restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    );
  }
};

export default Restaurantlist;
