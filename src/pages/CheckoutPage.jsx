import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const CheckoutPage = () => {
  const { user } = useAuth0();

  return user ? <h1>Hello checkout</h1> : <Navigate to={"/"} />;
};

export default CheckoutPage;
