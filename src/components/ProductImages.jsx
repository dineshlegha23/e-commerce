import React, { useState } from "react";

const ProductImages = ({
  name,
  image,
  index,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  return (
    <div>
      <img
        onClick={() => setCurrentImageIndex(index)}
        className={`cursor-pointer w-[100px] h-[75px] rounded-md object-cover ${
          index === currentImageIndex ? "border-[3px] border-brown" : ""
        }`}
        src={image}
        alt={name}
      />
    </div>
  );
};

export default ProductImages;
