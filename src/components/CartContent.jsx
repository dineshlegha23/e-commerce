import React from "react";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const CartContent = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((acc, curr) => {
    return acc + curr.subTotal * curr.amount;
  }, 0);

  return (
    <section className="px-[85px] py-20 h-[1000px]">
      <CartColumns />
      <div className="flex flex-col gap-12 pb-10 border-b-[1px] border-black/20">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            amount={item.amount}
            price={item.price}
            subtotal={item.subTotal}
            color={item.color}
            stock={item.stock}
          />
        ))}
      </div>
      <div className="my-14 flex justify-between">
        <Link
          to={"/products"}
          className="bg-brown text-white py-2 px-3 tracking-wider rounded-md"
        >
          Continue Shopping
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-black/80 text-white px-3 tracking-wider rounded-md"
        >
          Clear Shopping Cart
        </button>
      </div>
      <CartTotals subtotal={subtotal} />
    </section>
  );
};

export default CartContent;
