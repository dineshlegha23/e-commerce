import React from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  return (
    <section className="h-screen bg-[#f1f5f8] px-[85px]">
      <div className="flex flex-col gap-10 justify-center items-center h-full">
        <h2 className="text-[39px] tracking-wider font-bold text-black/80">
          Featured Products
          <span className="block bg-[#ab7a5f] w-[100px] mx-auto h-1"></span>
        </h2>
        <div>
          <Product />
          <Product />
          <Product />
        </div>
        <button className="bg-[#ab7a5f] text-white/80 uppercase tracking-widest text-[15px] px-4 py-[5px] rounded-md">
          All products
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
