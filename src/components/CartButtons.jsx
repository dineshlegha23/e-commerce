import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartButtons = () => {
  return (
    <div className="flex gap-10 p-3">
      <div className="flex text-2xl items-center gap-2 relative">
        <p>Cart</p>
        <FaShoppingCart />
        <p className="absolute -top-[6px] -right-3 text-white w-6 h-6 flex justify-center items-center text-sm rounded-full bg-red-700">
          6
        </p>
      </div>
      <div className="flex text-2xl items-center gap-2">
        <p>Login</p>
        <FaUserPlus />
      </div>
    </div>
  );
};

export default CartButtons;
