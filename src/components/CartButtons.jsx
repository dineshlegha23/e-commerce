import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButtons = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="flex gap-10 p-3">
      <Link
        to={"/cart"}
        className="flex text-2xl items-center gap-2 relative cursor-pointer"
      >
        <p>Cart</p>
        <FaShoppingCart />
        <p className="absolute -top-[6px] -right-3 text-white w-6 h-6 flex justify-center items-center text-sm rounded-full bg-red-700">
          {cartItems?.length}
        </p>
      </Link>
      <div className="flex text-2xl items-center gap-2">
        <p>Login</p>
        <FaUserPlus />
      </div>
    </div>
  );
};

export default CartButtons;
