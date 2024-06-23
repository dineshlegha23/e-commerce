import { useEffect, useState } from "react";
import Links from "../components/Links";
import { Link, useParams } from "react-router-dom";
import { Loading, ProductImages, Stars, AddToCart } from "../components/";
import { formatPrice } from "../utils/helpers";
import { TiTick } from "react-icons/ti";
import { useFetchSingleProductQuery } from "../store/api/productsApiSlice";

const SingleProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState();
  const [amount, setAmount] = useState(1);
  const { productId } = useParams();

  const {
    data: product,
    isLoading: loading,
    error,
  } = useFetchSingleProductQuery(productId);

  useEffect(() => {
    product && setCurrentColor(product?.colors[0]);
  }, [product]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="mb-14">
      <Links home={true} products={true} link={product?.name} />
      <div className="max-w-[1350px] mx-auto px-[90px] xl:px-10 lg:px-8 md:px-3 mt-[82px]">
        <Link
          to={"/products"}
          className="bg-brown text-white/80 tracking-wider px-3 py-1 rounded-md"
        >
          BACK TO PRODUCTS
        </Link>
        <div className="mt-14 flex [@media(max-width:990px)]:flex-col gap-16">
          <div className="w-[552px] [@media(max-width:992px)]:w-full">
            <img
              className="w-[552px] [@media(max-width:992px)]:w-full h-[500px] object-cover rounded-md"
              src={product?.images[currentImageIndex]?.url}
              alt={`${product?.name}`}
            />
            <div className="grid grid-cols-5 gap-4 xs:gap-2 mt-4">
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
            <Stars stars={product?.stars} reviews={product?.reviews} />
            <p className="text-brown text-xl tracking-widest font-bold mt-1">
              {formatPrice(product?.price)}
            </p>
            <p className="max-w-[555px] text-black/80 text-wider text-base leading-8">
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
