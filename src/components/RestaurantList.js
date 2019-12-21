import React, { useContext } from "react";

import RestaurantCard from "./RestaurantCard";

const Restaurantlist = props => {
  console.log(props);
  return (
    <div className="restarauntListContainer">
      {props.restaurantList.map(restaurant => {
        return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default Restaurantlist;
