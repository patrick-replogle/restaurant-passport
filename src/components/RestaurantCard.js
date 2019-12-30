import React, { useContext, useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Emoji from "./Emoji";
import CardHeader from "./headers/CardHeader";
import Stamped from "../img/stamped.png";

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
    return array;
  };

  return (
    <div className="cardContainer">
      <CardHeader />
      {restaurant.map(res => {
        return (
          <div className="card">
            <div className="cardLeft" key={res.id}>
              <div className="cardAddress">
                <h2>{res.restaurant_name}</h2>
                <p>{res.restaurant_address}</p>
                <p>{res.restaurant_city}</p>
                <p>{res.restaurant_zip}</p>
              </div>
              <div className="cardContact">
                <p>Tele: {res.restaurant_phone_number}</p>
                <p>Website: {res.restaurant_website}</p>
              </div>

              <div className="ratingDiv">
                {displayRatings(res.restaurant_rating).map(() => {
                  return <Emoji label="star" symbol="⭐" key={Math.random()} />;
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
            </div>
            <div className="stamped">
              {res.restaurant_stamped && <img src={Stamped} alt="stamped " />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(RestaurantCard);
