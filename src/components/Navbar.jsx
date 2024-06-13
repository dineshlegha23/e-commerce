import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { CartButtons } from "../components";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isSidebarOpen) {
    return (
      <nav
        className={`py-3 h-screen transition-all ${
          isSidebarOpen ? "w-full" : "w-0"
        }`}
      >
        <div className="flex justify-between items-center px-7">
          <img src={logo} alt="logo" width={170} className="-ml-4" />
          <ImCross
            size={20}
            color="brown"
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <ul className="flex flex-col py-4 w-full">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.id}
              onClick={() => setIsSidebarOpen(false)}
            >
              <p className="capitalize py-4 pl-5 border-b-2 border-transparent hover:bg-blue-100 hover:pl-8 transition-all tracking-wider">
                {link.text}
              </p>
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="flex justify-center items-center"
        >
          <CartButtons />
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center max-w-[1350px] mx-auto py-4 px-[90px] xs:px-5 lg:px-5">
      <Link to={"/"}>
        <img
          src={logo}
          alt="comfy logo"
          className="w-44 lg:w-52 -ml-[18px] lg:-ml-5 xs:-ml-5"
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
      <div
        onClick={() => setIsSidebarOpen(true)}
        className="cursor-pointer hidden [@media(max-width:994px)]:block"
      >
        <FaBars size={32} color="brown" />
      </div>
      <div className="[@media(max-width:994px)]:hidden">
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
