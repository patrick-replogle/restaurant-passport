import React, { useContext } from "react";

import { passportContext } from "../contexts/passportContext";
import RestarauntCard from "./RestarauntCard";

const Restarauntlist = props => {
  const { restaurantList } = useContext(passportContext);

  return (
    <div className="restarauntListContainer">
      <h2>stuff</h2>
    </div>
  );
};

export default Restarauntlist;
