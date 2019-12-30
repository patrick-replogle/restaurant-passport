import React from "react";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

const RestaurantLink = props => {
  //create an array to display the correct number of stars based off of rating
  const displayRatings = () => {
    const array = [];
    for (let i = 0; i < props.restaurant.restaurant_rating; i++) {
      array.push(props.restaurant.restaurant_rating[i]);
    }
    return array;
  };

  //assign the results of displayRatings so it can be mapped over
  const ratings = displayRatings();

  return (
    <div className="restaurantLink">
      <Link to={`/restaurant/${props.restaurant.id}`}>
        <h2>{props.restaurant.restaurant_name}</h2>
        <div className="ratingDiv">
          {ratings.map(() => {
            return <Emoji label="star" symbol="⭐" key={Math.random()} />;
          })}
        </div>

        <p>{props.restaurant.restaurant_address}</p>
        <p>{props.restaurant.restaurant_city}</p>
      </Link>
    </div>
  );
};

export default RestaurantLink;
