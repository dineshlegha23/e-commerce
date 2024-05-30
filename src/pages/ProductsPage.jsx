import React, { useEffect, useState } from "react";
import Links from "../components/Links";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components";
import Error from "../components/Error";
import { addProducts } from "../store/productsSlice";
import { products_url } from "../utils/constants";

const ProductsPage = () => {
  const { allProducts } = useSelector((store) => store.products);
  console.log(allProducts);

  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  const companies = [...new Set(allProducts.map((product) => product.company))];

  const colors = [
    ...new Set([...allProducts.map((product) => product.colors)].flat()),
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

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
      console.log(error);
    }
  };

  useEffect(() => {
    allProducts.length > 0 || fetchData();
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <Links home={true} products={"visible"} />
      <div className="flex gap-5 mt-14 p-2 px-[85px]">
        <article className="w-[234px] px-1 mx-auto h-fit sticky top-3 bottom-0">
          <div className="flex flex-col gap-[14px] ">
            <form>
              <input
                type="text"
                className="bg-[#f1f5f9] w-[190px] py-[6px] px-2 rounded-md tracking-wider font-medium placeholder:text-black/50"
                placeholder="Search"
              />
            </form>
            <div>
              <h5 className="font-bold  text-black/70 tracking-widest my-1">
                Category
              </h5>
              <ul className="text-[#617d98] text-sm flex flex-col gap-[5px] mt-2 tracking-widest capitalize">
                <li className="border-b-[1px] pb-[2px] w-fit">All</li>
                {categories.map((category) => (
                  <li key={category} className="pb-[2px]">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold  text-black/70 tracking-widest my-1">
                Company
              </h5>
              <select
                name="company"
                id="company"
                className="bg-[#f1f5f9] rounded-md py-1 px-1 mt-1 text-xs"
              >
                <option value="all">all</option>
                {companies.map((company) => (
                  <option value={company} key={company} className="capitalize">
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h5 className="font-bold  text-black/70 tracking-widest my-1">
                Colors
              </h5>
              <div className="flex gap-2 items-center py-[6px] text-[#617d98] tracking-widest mb-4">
                <button className="tracking-wider text-sm pb-[2px] border-b-[1px]">
                  All
                </button>
                {colors.map((color) => (
                  <button
                    style={{ backgroundColor: color }}
                    className="w-4 h-4 rounded-full opacity-50"
                  ></button>
                ))}
              </div>
              <div>
                <h5 className="font-bold  text-black/70 tracking-widest my-1">
                  Price
                </h5>
                <p className="mb-1 text-black/70">$3,099.99</p>
                <input type="range" name="price" id="price" min={0} max={100} />
              </div>
            </div>
            <div className="flex justify-between w-40">
              <h5 className="text-black/70 my-2">Free Shipping</h5>
              <input type="checkbox" name="freeShipping" id="freeShipping" />
            </div>
          </div>
          <button className="px-3 text-sm py-1 mt-3 tracking-wider bg-[#bb2525] text-white rounded-md">
            Clear Filters
          </button>
        </article>
        <article className="w-full bg-blue-400 h-[1000px]">hh</article>
      </div>
    </section>
  );
};

export default ProductsPage;
