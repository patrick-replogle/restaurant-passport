import React from "react";
import { Link } from "react-router-dom";

const RestaurantLink = props => {
  return (
    <div className="restaurantCard">
      <Link to={`/restaurant/${props.restaurant.id}`}>
        <h2>{props.restaurant.restaurant_name}</h2>
        <p>Rating: {props.restaurant.restaurant_rating}</p>
        <p>{props.restaurant.restaurant_address}</p>
        <p>{props.restaurant.restaurant_city}</p>
      </Link>
    </div>
  );
};

export default RestaurantLink;
