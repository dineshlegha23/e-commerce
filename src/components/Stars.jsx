import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span className="text-yellow-500">
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex gap-1 items-center">
      {tempStars}
      <span className="ml-3 text-black/80 tracking-wider">
        ({reviews} customer reviews)
      </span>
    </div>
  );
};

export default Stars;
