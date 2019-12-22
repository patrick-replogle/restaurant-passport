import React from "react";

import { userContext } from "../contexts/userContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
