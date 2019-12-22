import React, { useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

const Restaurantlist = props => {
  console.log(props.search);
  useEffect(() => {
    props.setFilteredList(
      props.filteredList.filter(name =>
        name.restaurant_name.toLowerCase().includes(props.search.toLowerCase())
      )
    );
  }, [props.search]);

  const myArray = props.filteredList.length
    ? props.filteredList
    : props.restaurantList;

  return (
    <div className="restarauntListContainer">
      {myArray.map(restaurant => {
        return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default Restaurantlist;
