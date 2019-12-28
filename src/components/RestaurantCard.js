import React, { useContext, useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Emoji from "./Emoji";
import CardHeader from "./headers/CardHeader";

const RestaurantCard = props => {
  const { setIsEditing, setItemToEdit } = useContext(passportContext);
  const [restaurant, setRestaurant] = useState([]);

  //fetch specific restaurant ID to display card
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

  //create an array to display the correct number of stars based off of rating
  const displayRatings = num => {
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push(num[i]);
    }
    console.log(array);
    return array;
  };

  return (
    <div className="cardContainer">
      <CardHeader />
      {restaurant.map(res => {
        return (
          <div className="restaurantCard" key={res.id}>
            <h2>{res.restaurant_name}</h2>
            <p>{res.restaurant_address}</p>
            <p>{res.restaurant_city}</p>
            <p>{res.restaurant_zip}</p>
            <p>Tele: {res.restaurant_phone_number}</p>
            <p>Website: {res.restaurant_website}</p>
            <div className="ratingDiv">
              {displayRatings(res.restaurant_rating).map(cv => {
                return <Emoji label="star" symbol="⭐" />;
              })}
            </div>
            <p>Notes: {res.restaurant_notes}</p>
            <div>
              <button onClick={deleteRestaurant}>Delete</button>
              <button
                onClick={e => {
                  e.preventDefault();
                  handleEdit(res);
                }}
              >
                Edit
              </button>
              <button onClick={() => props.history.push("/dashboard")}>
                Back
              </button>
            </div>
            {res.restaurant_stamped && <p>stamped</p>}
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(RestaurantCard);
