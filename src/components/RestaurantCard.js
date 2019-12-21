import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const RestaurantCard = ({ restaurant }) => {
  const fetchRestaurant = e => {
    e.preventDefault();
  };

  const deleteRestaurant = id => {
    axiosWithAuth()
      .delete(`/restaurants/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error deleting: ", err);
      });
  };
  return (
    <div className="restaurantCard">
      <h2>{restaurant.restaurant_name}</h2>
      <p>{restaurant.restaurant_address}</p>
      <p>{restaurant.restaurant_city}</p>
      <p>{restaurant.restaurant_zip}</p>
      <p>{restaurant.restaurant_phone_number}</p>
      <p>{restaurant.restaurant_website}</p>
      <p>{restaurant.restaurant_rating}</p>
      <p>{restaurant.restaurant_notes}</p>
      <button
        onClick={e => {
          e.preventDefault();
          deleteRestaurant(restaurant.id);
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};

export default RestaurantCard;
