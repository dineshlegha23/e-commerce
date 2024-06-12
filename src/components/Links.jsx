import React from "react";
import { Link } from "react-router-dom";

const Links = ({ home, products, link }) => {
  return (
    <div className="w-full h-32 md:h-20 bg-[rgb(234,222,215)] text-[#795744] flex items-center">
      <div className="max-w-[1350px] w-full mx-auto px-[85px] lg:px-8 text-3xl lg:text-2xl md:text-xl font-bold">
        {home && (
          <Link to={"/"} className="hover:text-black/70">
            Home /
          </Link>
        )}
        {products == "visible" ? (
          <span className="text-black/80"> Products /</span>
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
