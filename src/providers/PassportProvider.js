import React, { useState } from "react";

import { passportContext } from "../contexts/passportContext";

const PassportProvider = ({ children }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  return (
    <passportContext.Provider
      value={{
        restaurantList,
        setRestaurantList,
        isEditing,
        setIsEditing,
        itemToEdit,
        setItemToEdit
      }}
    >
      {children}
    </passportContext.Provider>
  );
};

export default PassportProvider;
