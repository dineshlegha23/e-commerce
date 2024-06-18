import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { myUser } = useSelector((store) => store.auth);

  return myUser ? <h1>Hello checkout</h1> : <Navigate to={"/"} />;
};

export default CheckoutPage;
