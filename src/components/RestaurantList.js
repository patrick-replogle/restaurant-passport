import React, { useEffect } from "react";

import RestaurantLink from "./RestaurantLink";

const Restaurantlist = ({
  search,
  restaurantList,
  filteredList,
  setFilteredList
}) => {
  useEffect(() => {
    setFilteredList(
      restaurantList.filter(name =>
        name.restaurant_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, setFilteredList, restaurantList]);

  const dynamicArray = filteredList.length ? filteredList : restaurantList;

  return (
    <div className="restarauntListContainer">
      {dynamicArray.length < 1 && <h2>Add Some Restaurants!</h2>}
      {dynamicArray.map(restaurant => {
        return <RestaurantLink restaurant={restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default Restaurantlist;
