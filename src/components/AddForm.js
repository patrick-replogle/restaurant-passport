import React, { useState, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormState = {
  name: "",
  date: "",
  city: "",
  notes: "",
  rating: 1,
  stamped: false
};

const AddForm = props => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = e => {
    e.preventDefault();
    setFormData({ ...formData, rating: Number(e.target.value) });
  };

  const handleStampedChange = e => {
    e.preventDefault();
    setFormData({ ...formData, stamped: !formData.stamped });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    setError("");
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
            name="name"
            id="addFromName"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="addFormDate"
            onChange={handleChange}
            value={formData.date}
            required
          />

          <label htmlFor="name">City</label>
          <input
            type="text"
            name="city"
            id="addFormCity"
            onChange={handleChange}
            value={formData.city}
            placeholder="city"
            required
          />

          <label htmlFor="addFormNotes">Notes</label>
          <input
            type="textarea"
            name="notes"
            id="addFormNotes"
            onChange={handleChange}
            value={formData.notes}
            placeholder="notes"
            required
          />

          <label htmlFor="addFormRating">Rating</label>
          <select
            type="select"
            name="rating"
            id="addFormRating"
            onChange={handleRatingChange}
            value={formData.rating}
            placeholder="rating"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <label htmlFor="addFormStamped">
            Have You Visited This Restaurant?
          </label>
          <input
            type="checkbox"
            name="stamped"
            id="addFormStamped"
            onChange={handleStampedChange}
            value={formData.stamped}
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
