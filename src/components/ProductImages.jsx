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
        className={`cursor-pointer w-[100px] [@media(max-width:990px)]:w-full h-[75px] xs:h-[50px] rounded-md object-cover ${
          index === currentImageIndex ? "border-[3px] border-brown" : ""
        }`}
        src={image}
        alt={name}
      />
    </div>
  );
};

export default ProductImages;
