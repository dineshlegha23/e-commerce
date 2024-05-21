import React, { useState } from "react";

const ProductImages = ({
  name,
  image,
  index,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div>
      <img
        onClick={() => setCurrentIndex(index)}
        className={`cursor-pointer w-[100px] h-[75px] rounded-md object-cover ${
          index === currentIndex ? "border-[3px] border-brown" : ""
        }`}
        src={image}
        alt={name}
      />
    </div>
  );
};

export default ProductImages;
