import React, { useState } from "React";

import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormState = {
  name: "",
  date: "",
  city: "",
  notes: "",
  rating: null,
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

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    axiosWithAuth()
      .post("/restaurants", formData)
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
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
      <div>
        <h2>...loading</h2>
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
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="name"
            required
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
