import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price }) => {
  return (
    <div className={`flex flex-col gap-4 `}>
      <div className="relative before:content-[''] before:absolute before:inset-0 before:block hover:before:bg-black hover:before:opacity-30 hover:cursor-pointer transition-all">
        <img
          src={image}
          alt={name}
          className="w-[450px] h-[227px] rounded-sm"
        />
      </div>
      <div className="flex justify-between tracking-widest">
        <p className="capitalize">{name}</p>
        <p className="text-[#ab7a5f]">${formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default Product;
