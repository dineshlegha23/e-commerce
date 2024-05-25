import React from "react";
import { Link } from "react-router-dom";

const Links = ({ home, products, link }) => {
  return (
    <div className="w-full h-32 bg-[#eaded7] text-[#795744] flex items-center px-[85px]">
      <div className="text-3xl font-bold">
        {home && (
          <Link to={"/"} className="hover:text-black/70">
            Home /
          </Link>
        )}
        {products == "visible" ? (
          " Products /"
        ) : products === true ? (
          <Link to={"/products"} className="hover:text-black/70">
            {" "}
            Products /{" "}
          </Link>
        ) : (
          " "
        )}
        {link && <span className="text-black/80 capitalize"> {link}</span>}
      </div>
    </div>
  );
};

export default Links;
