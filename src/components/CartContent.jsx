import React from "react";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";

const CartContent = () => {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <section className="px-[85px] py-20 h-[1000px]">
      <CartColumns />
      <div className="flex flex-col gap-12">
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
      <CartTotals />
    </section>
  );
};

// const Wrapper = styled.section`
//   .link-container {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 2rem;
//   }
//   .link-btn {
//     background: transparent;
//     border-color: transparent;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//     background: var(--clr-primary-5);
//     color: var(--clr-white);
//     border-radius: var(--radius);
//     letter-spacing: var(--spacing);
//     font-weight: 400;
//     cursor: pointer;
//   }
//   .clear-btn {
//     background: var(--clr-black);
//   }
// `;

export default CartContent;
