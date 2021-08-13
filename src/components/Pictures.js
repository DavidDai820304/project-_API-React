import React from "react";
import { v4 as uuidv4 } from "uuid";

const Pictures = ({ data }) => {
  return (
    <div className="container" id={uuidv4()}>
      <img src={data.src.large} alt="1" />
    </div>
  );
};

export default Pictures;
