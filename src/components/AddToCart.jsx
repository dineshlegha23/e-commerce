import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
// import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ amount, setAmount, stock }) => {
  return (
    <div>
      <AmountButtons amount={amount} setAmount={setAmount} stock={stock} />
      <button className="uppercase bg-brown py-2 px-4 rounded-md text-white/80 mb-5 tracking-widest text-sm hover:bg-orange-800 transition-all">
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
