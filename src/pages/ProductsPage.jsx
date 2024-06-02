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
  const { allProducts, minPrice, maxPrice } = useSelector(
    (store) => store.products
  );

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
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [color, setColor] = useState("all");
  const [price, setPrice] = useState(309999);
  const [isShippingFree, setIsShippingFree] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(products_url);
      const data = await response.json();
      dispatch(addProducts(data));
      setFilteredProducts(data);
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

  useEffect(() => {
    setFilteredProducts(
      allProducts
        .filter((product) => product?.name?.startsWith(search))
        .filter((product) =>
          category === "all" ? true : product?.category?.startsWith(category)
        )
        .filter((product) =>
          company === "all" ? true : product?.company?.startsWith(company)
        )
        .filter((product) => product.price <= price)
        .filter((product) =>
          isShippingFree ? product?.shipping === true : true
        )
      // .filter((product) =>
      //   color === "all"
      //     ? true
      //     : product?.colors?.flat().filter((color) => color.startsWith(color))
      // )
    );
  }, [search, category, company, color, price, isShippingFree]);

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
          search={search}
          setSearch={setSearch}
          setCategory={setCategory}
          setCompany={setCompany}
          setColor={setColor}
          categories={categories}
          companies={companies}
          colors={colors}
          minPrice={minPrice}
          maxPrice={maxPrice}
          price={price}
          setPrice={setPrice}
          isShippingFree={isShippingFree}
          setIsShippingFree={setIsShippingFree}
          filteredProducts={filteredProducts}
        />
        <ProductList filteredProducts={filteredProducts} />
      </div>
    </section>
  );
};

export default ProductsPage;
