import React, { useEffect, useState } from "react";
import Links from "../components/Links";
import { useParams } from "react-router-dom";
import { single_product_url } from "../utils/constants";
import Loading from "../components/Loading";
import ProductImages from "../components/ProductImages";

const SingleProductPage = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [product, setProduct] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { productId } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${single_product_url}${productId}`);
      const data = await response.json();
      setProduct(data);
      console.log(data);
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
    <div>
      <Links home={true} products={true} link={product?.name} />
      <div className="px-[90px] mt-[82px] h-screen">
        <button className="bg-brown text-white/80 tracking-wider px-3 py-1 rounded-md">
          BACK TO PRODUCTS
        </button>
        <div className="mt-10">
          <div className="w-[552px]">
            <img
              className="w-[552px] h-[500px] object-cover rounded-md"
              src={product?.images[currentIndex]?.url}
              alt={`${product?.name}`}
            />
            <div className="grid grid-cols-5 gap-4 mt-5">
              {product?.images?.map((product, index) => (
                <ProductImages
                  key={product?.id}
                  image={product?.url}
                  index={index}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
