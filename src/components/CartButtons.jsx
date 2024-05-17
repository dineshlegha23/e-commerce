import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartButtons = () => {
  return (
    <div className="flex gap-5">
      <div className="flex text-2xl items-center gap-1">
        <p>Cart</p>
        <FaShoppingCart />
      </div>
      <div className="flex text-2xl items-center">
        <p>Login</p>
        <FaUserPlus />
      </div>
    </div>
  );
};

export default CartButtons;
