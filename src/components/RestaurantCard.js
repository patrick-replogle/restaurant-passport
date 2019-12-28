import React, { useContext, useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RestaurantCard = props => {
  const {
    setIsEditing,
    itemToEdit,
    setItemToEdit,
    setRestaurantList
  } = useContext(passportContext);

  const [restaurant, setRestaurant] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/restaurants/${id}`)
      .then(res => {
        setRestaurant(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  //delete restaurant
  const deleteRestaurant = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/restaurants/${id}`)
      .then(() => {
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error deleting: ", err);
      });
  };

  //send restaurant to form for editing
  const handleEdit = item => {
    setIsEditing(true);
    setItemToEdit(item);
    props.history.push("/add_form");
  };

  return (
    <>
      {restaurant.map(res => {
        return (
          <div className="restaurantCard" key={res.id}>
            <h2>{res.restaurant_name}</h2>
            <p>{res.restaurant_address}</p>
            <p>{res.restaurant_city}</p>
            <p>{res.restaurant_zip}</p>
            <p>Tele: {res.restaurant_phone_number}</p>
            <p>Website: {res.restaurant_website}</p>
            <p>Rating: {res.restaurant_rating}</p>
            <p>Notes: {res.restaurant_notes}</p>
            <button onClick={deleteRestaurant}>Delete</button>
            <button
              onClick={e => {
                e.preventDefault();
                handleEdit(res);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </>
  );
};

export default withRouter(RestaurantCard);
