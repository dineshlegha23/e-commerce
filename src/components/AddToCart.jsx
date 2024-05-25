import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const AddToCart = ({
  amount,
  setAmount,
  stock,
  id,
  name,
  color,
  image,
  price,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <AmountButtons amount={amount} setAmount={setAmount} stock={stock} />
      <button
        className="uppercase bg-brown py-2 px-4 rounded-md text-white/80 mb-5 tracking-widest text-sm hover:bg-orange-800 transition-all"
        onClick={() =>
          dispatch(addToCart({ id, amount, name, image, color, price, stock }))
        }
      >
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
