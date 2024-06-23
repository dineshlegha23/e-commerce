import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../store/authSlice";
import { Link } from "react-router-dom";

const CartButtons = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser(true));
    } else {
      dispatch(removeUser());
    }
  }, [isAuthenticated]);

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
      {user ? (
        <button
          onClick={() => logout()}
          className="flex text-2xl items-center gap-2"
        >
          <p>Logout</p>
          <FaUserMinus />
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="flex text-2xl items-center gap-2"
        >
          <p>Login</p>
          <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
