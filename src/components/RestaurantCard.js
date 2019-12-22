import React, { useContext } from "react";

import { withRouter } from "react-router-dom";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RestaurantCard = props => {
  console.log(props);
  const {
    setIsEditing,
    setItemToEdit,
    itemToEdit,
    setRestaurantList
  } = useContext(passportContext);

  const fetchRestaurant = e => {
    e.preventDefault();
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        console.log(res);
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  };

  const deleteRestaurant = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/restaurants/${props.restaurant.id}`)
      .then(res => {
        console.log(res);
        console.log(props.restaurant.id);
      })
      .catch(err => {
        console.log("Error deleting: ", err);
      });
  };

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
    setItemToEdit(props.restaurant);
    console.log(itemToEdit);
    props.history.push("/add_form");
  };

  return (
    <div className="restaurantCard">
      <h2>{props.restaurant.restaurant_name}</h2>
      <p>{props.restaurant.restaurant_address}</p>
      <p>{props.restaurant.restaurant_city}</p>
      <p>{props.restaurant.restaurant_zip}</p>
      <p>{props.restaurant.restaurant_phone_number}</p>
      <p>{props.restaurant.restaurant_website}</p>
      <p>{props.restaurant.restaurant_rating}</p>
      <p>{props.restaurant.restaurant_notes}</p>
      <button onClick={deleteRestaurant}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default withRouter(RestaurantCard);
