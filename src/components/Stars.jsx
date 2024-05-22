import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ rating = 3.5 }) => {
  return (
    <div className="flex gap-1">
      <BsStar />
      <BsStarFill />
      <BsStarHalf />
    </div>
  );
};

export default Stars;
