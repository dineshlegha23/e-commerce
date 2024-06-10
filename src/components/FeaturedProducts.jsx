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

  if (error) {
    return <Error />;
  }

  return (
    <section className="py-20 bg-[#f1f5f8] px-[85px] lg:px-8 md:px-5 [@media(max-width:500px)]:px-3 pb-20">
      <div className="flex flex-col gap-16 justify-center items-center h-full">
        <h2 className="text-[39px] text-center [@media(max-width:800px)]:text-3xl tracking-wider font-bold text-black/80">
          Featured Products
          <span className="block bg-brown w-[100px] mx-auto h-1 mt-2"></span>
        </h2>
        {loading ? (
          <Loading full={false} />
        ) : (
          <div className="grid grid-cols-3 xl:grid-cols-2 [@media(max-width:800px)]:grid-cols-1 gap-10">
            {products
              .filter((product) => product.featured === true)
              .map(
                (product, index) =>
                  index < 3 && <Product key={product.id} {...product} />
              )}
          </div>
        )}
        <Link
          to={"/products"}
          className="bg-brown text-white/80 uppercase tracking-widest text-[15px] px-4 py-[5px] rounded-md"
        >
          All products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
