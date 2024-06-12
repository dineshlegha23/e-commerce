import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { CartButtons } from "../components";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-[1350px] mx-auto p-2 px-[90px] lg:px-14">
      <Link to={"/"}>
        <img
          src={logo}
          alt="comfy logo"
          className="w-44 [@media(max-width:994px)]:hidden -ml-[18px]"
        />
      </Link>
      <ul className="[@media(max-width:994px)]:hidden flex gap-8 py-2 px-3 items-center text-lg font-normal">
        {links.map((link) => (
          <Link to={link.url} key={link.id}>
            <p className="capitalize py-2 border-b-2 border-transparent hover:border-b-2 hover:border-red-300 tracking-wider">
              {link.text}
            </p>
          </Link>
        ))}
      </ul>
      <CartButtons />
    </nav>
  );
};

export default Navbar;
