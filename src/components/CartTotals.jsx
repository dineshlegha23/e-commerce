import React from "react";
import { fixedPrice, formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartTotals = ({ subtotal, shipping = 534 }) => {
  const { myUser } = useSelector((store) => store.auth);
  let total = subtotal + shipping;

  return (
    <section>
      <div className="flex justify-between xs:justify-center">
        <div></div>
        <div className="flex flex-col gap-5">
          <div className="border-[1px] border-black/20 rounded-md flex flex-col gap-3 px-10 xs:px-3 py-5 w-[380px] xs:w-[calc(100vw-30px)] xs:text-sm">
            <div className="flex justify-between text-md tracking-wider font-semibold">
              <p>Subtotal :</p>
              <p>{formatPrice(subtotal)}</p>
            </div>
            <div className="flex justify-between text-black/60 font-semibold">
              <p>Shipping Fee :</p>
              <p>{formatPrice(shipping)}</p>
            </div>
            <hr className="text-black/20 mt-2 mb-5" />
            <div className="flex justify-between text-2xl md:text-xl xs:text-lg font-bold">
              <h2>Order Total :</h2>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
          {myUser ? (
            <Link
              to={"/checkout"}
              className="w-full text-center bg-brown text-white/100 tracking-widest py-1 rounded-md"
            >
              Checkout
            </Link>
          ) : (
            <button className="bg-brown text-white/80 tracking-widest py-1 rounded-md">
              LOGIN
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartTotals;
