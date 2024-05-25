import React from "react";
import { CartContent } from "../components";
import Links from "../components/Links";

const CartPage = () => {
  return (
    <div>
      <Links home={true} link={"cart"} products={false} />
      <CartContent />
    </div>
  );
};

export default CartPage;
