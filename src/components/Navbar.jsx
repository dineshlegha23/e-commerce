import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { CartButtons } from "../components";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="comfy logo" className="w-44 -ml-4" />
      <ul className="flex gap-8 p-3 items-center text-lg font-normal">
        {links.map((link) => (
          <Link to={link.url} key={link.id}>
            <p className="capitalize">{link.text}</p>
          </Link>
        ))}
      </ul>
      <CartButtons />
    </nav>
  );
};

export default Navbar;
