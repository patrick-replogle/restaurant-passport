import React, { useState, useContext, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormState = {
  restaurant_name: "",
  restaurant_address: "",
  restaurant_city: "",
  restaurant_zip: "",
  restaurant_phone_number: "",
  restaurant_website: "",
  restaurant_rating: 1,
  restaurant_notes: "",
  restaurant_stamped: false
};

const AddForm = props => {
  const {
    restaurantList,
    setRestaurantList,
    isEditing,
    setIsEditing,
    itemToEdit,
    setItemToEdit
  } = useContext(passportContext);
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      setFormData({
        restaurant_name: itemToEdit.restaurant_name,
        restaurant_address: itemToEdit.restaurant_address,
        restaurant_city: itemToEdit.restaurant_city,
        restaurant_zip: itemToEdit.restaurant_zip,
        restaurant_phone_number: itemToEdit.restaurant_phone_number,
        restaurant_website: itemToEdit.restaurant_website,
        restaurant_rating: itemToEdit.restaurant_rating,
        restaurant_notes: itemToEdit.restaurant_notes,
        restaurant_stamped: itemToEdit.restaurant_stamped
      });
    }
  }, [isEditing]);

  const handleChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = e => {
    e.preventDefault();
    setFormData({ ...formData, restaurant_rating: Number(e.target.value) });
  };

  const handleStampedChange = e => {
    e.preventDefault();
    setFormData({
      ...formData,
      restaurant_stamped: !formData.restaurant_stamped
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (isEditing) {
      axiosWithAuth()
        .put(`/restaurants/${itemToEdit.id}`, formData)
        .then(() => {
          setIsEditing(false);
          setItemToEdit({});
          setFormData(initialFormState);
          setIsLoading(false);
          props.history.push("/dashboard");
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log("Put request error: ", err);
        });
    } else {
      axiosWithAuth()
        .post("/restaurants", formData)
        .then(res => {
          console.log(res.data);
          setIsLoading(false);
          setFormData(initialFormState);
          props.history.push("/dashboard");
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log("Add form post error: ", err);
        });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="secondary" />
      </div>
    );
  } else {
    return (
      <div className="addFormContainer">
        <form className="addForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="restaurant_name"
            id="addFormName"
            onChange={handleChange}
            value={formData.restaurant_name}
            placeholder="name"
            required
          />

          <label htmlFor="name">Address</label>
          <input
            type="text"
            name="restaurant_address"
            id="addFormAddress"
            onChange={handleChange}
            value={formData.restaurant_address}
            placeholder="address"
            required
          />

          <label htmlFor="name">City</label>
          <input
            type="text"
            name="restaurant_city"
            id="addFormCity"
            onChange={handleChange}
            value={formData.restaurant_city}
            placeholder="city"
            required
          />

          <label htmlFor="name">Zip Code</label>
          <input
            type="text"
            name="restaurant_zip"
            id="addFormZip"
            onChange={handleChange}
            value={formData.restaurant_zip}
            placeholder="zip code"
            required
          />

          <label htmlFor="name">Phone #</label>
          <input
            type="tel"
            name="restaurant_phone_number"
            id="addFormPhone"
            onChange={handleChange}
            value={formData.restaurant_phone_number}
            placeholder="phone number"
            required
          />

          <label htmlFor="name">Website</label>
          <input
            type="text"
            name="restaurant_website"
            id="addFormWebsite"
            onChange={handleChange}
            value={formData.restaurant_website}
            placeholder="url"
            required
          />

          <label htmlFor="addFormRating">Rating</label>
          <select
            type="select"
            name="restaurant_rating"
            id="addFormRating"
            onChange={handleRatingChange}
            value={formData.restaurant_rating}
            placeholder="rating"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <label htmlFor="addFormNotes">Notes</label>
          <input
            type="textarea"
            name="restaurant_notes"
            id="addFormNotes"
            onChange={handleChange}
            value={formData.restaurant_notes}
            placeholder="notes"
            required
          />

          <label htmlFor="addFormStamped">
            Have You Visited This Restaurant?
          </label>
          <input
            type="checkbox"
            name="restaurant_stamped"
            id="addFormStamped"
            onChange={handleStampedChange}
            value={formData.restaurant_stamped}
          />

          <button>Submit</button>
          <button onClick={() => setFormData(initialFormState)}>Reset </button>
          <button onClick={() => props.history.push("/dashboard")}>
            Cancel
          </button>
        </form>
        {error && <h2>{error}</h2>}
      </div>
    );
  }
};

export default AddForm;
