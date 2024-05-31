import React, { useEffect, useState } from "react";
import Links from "../components/Links";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components";
import Error from "../components/Error";
import { addProducts } from "../store/productsSlice";
import { products_url } from "../utils/constants";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

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
      <div className="flex gap-[30px] mt-14 p-2 px-[85px]">
        <Filters
          categories={categories}
          companies={companies}
          colors={colors}
        />
        <ProductList />
      </div>
    </section>
  );
};

export default ProductsPage;
