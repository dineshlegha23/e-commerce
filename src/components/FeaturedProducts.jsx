import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productsSlice";
import { products_url } from "../utils/constants";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(products_url);
      const data = await response.json();
      dispatch(addProducts(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
