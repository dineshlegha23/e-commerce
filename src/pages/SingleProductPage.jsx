import React, { useEffect, useState } from "react";
import Links from "../components/Links";
import { Link, useParams } from "react-router-dom";
import { single_product_url } from "../utils/constants";
import { Loading, ProductImages, Stars, AddToCart } from "../components/";
import { formatPrice } from "../utils/helpers";
import { TiTick } from "react-icons/ti";

const SingleProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState();
  const [amount, setAmount] = useState(1);
  const { productId } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${single_product_url}${productId}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      setCurrentColor(data.colors[0]);
      console.log(data);
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
        <Link
          to={"/products"}
          className="bg-brown text-white/80 tracking-wider px-3 py-1 rounded-md"
        >
          BACK TO PRODUCTS
        </Link>
        <div className="mt-12 flex gap-16">
          <div className="w-[552px]">
            <img
              className="w-[552px] h-[500px] object-cover rounded-md"
              src={product?.images[currentImageIndex]?.url}
              alt={`${product?.name}`}
            />
            <div className="grid grid-cols-5 gap-4 mt-4">
              {product?.images?.map((product, index) => (
                <ProductImages
                  key={product?.id}
                  image={product?.url}
                  index={index}
                  currentImageIndex={currentImageIndex}
                  setCurrentImageIndex={setCurrentImageIndex}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[39px] text-black/80 font-bold capitalize -mt-5 tracking-wider">
              {product?.name}
            </h1>
            <Stars />
            <p className="text-brown text-xl tracking-widest font-bold mt-1">
              ${formatPrice(product?.price)}
            </p>
            <p className="w-[555px] text-black/80 text-wider text-base leading-8">
              {product?.description}
            </p>
            <section className="w-[300px] flex flex-col gap-5 mt-3">
              <div className="flex w-full">
                <p className="w-full font-bold text-black/70">Available :</p>
                <p className="text-left w-full text-black/80 -ml-11">
                  {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="w-full font-bold text-black/70">SKU :</p>
                <p className="left w-full text-black/80 -ml-11">
                  {product?.id}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="w-full font-bold text-black/70">Brand :</p>
                <p className="text-left w-full text-black/80 -ml-11 capitalize">
                  {product?.company}
                </p>
              </div>
            </section>
            <hr className="mt-3 text-black/20" />
            <div className="flex justify-between w-[255px] mt-6">
              <p className="font-bold text-black/70 w-full">Colors:</p>
              <div className="flex gap-2 w-full text-left">
                {product?.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setCurrentColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-6 h-6  rounded-full cursor-pointer grid content-center justify-center ${
                      currentColor === color ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {currentColor === color && (
                      <TiTick color="white" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <AddToCart
              amount={amount}
              setAmount={setAmount}
              stock={product?.stock}
              image={product?.images[currentImageIndex]?.url}
              id={product?.id}
              name={product?.name}
              color={currentColor}
              price={product?.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
