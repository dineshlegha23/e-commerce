import React from "react";
import { CartContent } from "../components";
import Links from "../components/Links";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <Links home={true} link={"cart"} products={false} />
          <CartContent />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-20">
          <p className="text-5xl font-semibold">Your cart is empty...</p>
          <Link
            to={"/products"}
            className="bg-brown text-white/80 py-1 px-5 rounded-md my-4"
          >
            FILL IT
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
