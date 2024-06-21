import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  const { user } = useAuth0();

  return user ? <Checkout /> : <Navigate to={"/"} />;
};

export default CheckoutPage;
