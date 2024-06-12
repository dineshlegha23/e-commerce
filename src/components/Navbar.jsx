import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { CartButtons } from "../components";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1350px] mx-auto py-4 px-[90px] xs:px-5 lg:px-12">
      <Link to={"/"}>
        <img
          src={logo}
          alt="comfy logo"
          className="w-44 lg:w-52 -ml-[18px] lg:-ml-8 xs:-ml-5"
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
      <div className="cursor-pointer">
        <FaBars size={32} color="brown" />
      </div>
      <div className="[@media(max-width:994px)]:hidden">
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
