// import React, { useEffect, useState } from "react";
// import Links from "../components/Links";
// import { useDispatch, useSelector } from "react-redux";
// import { Loading } from "../components";
// import Error from "../components/Error";
// import { addProducts } from "../store/productsSlice";
// import { products_url } from "../utils/constants";
// import Filters from "../components/Filters";
// import ProductList from "../components/ProductList";

// const ProductsPage = () => {
//   const { allProducts, minPrice, maxPrice } = useSelector(
//     (store) => store.products
//   );

//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState(allProducts);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [company, setCompany] = useState("all");
//   const [color, setColor] = useState("all");
//   const [price, setPrice] = useState(309999);
//   const [isShippingFree, setIsShippingFree] = useState(false);
//   const [sort, setSort] = useState("lowest");

//   const categories = [
//     ...new Set(allProducts.map((product) => product.category)),
//   ];

//   const companies = [...new Set(allProducts.map((product) => product.company))];

//   const colors = [
//     ...new Set([...allProducts.map((product) => product.colors)].flat()),
//   ];

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(products_url);
//       const data = await response.json();
//       dispatch(addProducts(data));
//       setFilteredProducts(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     allProducts.length > 0 || fetchData();
//   }, []);

//   useEffect(() => {
//     setFilteredProducts(
//       allProducts
//         .filter((product) => product?.name?.startsWith(search))
//         .filter((product) =>
//           category === "all" ? true : product?.category?.startsWith(category)
//         )
//         .filter((product) =>
//           company === "all" ? true : product?.company?.startsWith(company)
//         )
//         .filter((product) => product.price <= price)
//         .filter((product) =>
//           isShippingFree ? product?.shipping === true : true
//         )
//         .filter((product) =>
//           color === "all"
//             ? true
//             : product?.colors?.some((currentColor) => currentColor === color)
//         )
//     );

//     if (sort === "lowest") {
//       setFilteredProducts((products) =>
//         [...products].sort((a, b) => a.price - b.price)
//       );
//     }
//     if (sort === "highest") {
//       setFilteredProducts((products) =>
//         [...products].sort((a, b) => b.price - a.price)
//       );
//     }
//     if (sort === "a-z") {
//       setFilteredProducts((products) =>
//         [...products].sort((a, b) => a.name.localeCompare(b.name))
//       );
//     }
//     if (sort === "z-a") {
//       setFilteredProducts((products) =>
//         [...products].sort((a, b) => b.name.localeCompare(a.name))
//       );
//     }
//   }, [search, category, company, color, price, isShippingFree, sort]);

//   if (error) {
//     return <Error />;
//   }

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <section className="mb-14">
//       <Links home={true} products={"visible"} />
//       <div className="flex [@media(max-width:800px)]:flex-col gap-[30px] max-w-[1350px] mx-auto mt-14 p-2 px-[85px] lg:px-5 md:px-3">
//         <Filters
//           search={search}
//           setSearch={setSearch}
//           category={category}
//           setCategory={setCategory}
//           company={company}
//           setCompany={setCompany}
//           color={color}
//           setColor={setColor}
//           categories={categories}
//           companies={companies}
//           colors={colors}
//           minPrice={minPrice}
//           maxPrice={maxPrice}
//           price={price}
//           setPrice={setPrice}
//           isShippingFree={isShippingFree}
//           setIsShippingFree={setIsShippingFree}
//           filteredProducts={filteredProducts}
//         />
//         <ProductList
//           filteredProducts={filteredProducts}
//           sort={sort}
//           setSort={setSort}
//         />
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;

import React, { useEffect, useState } from "react";
import Links from "../components/Links";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components";
import Error from "../components/Error";
// import { addProducts } from "../store/productsSlice";
import { products_url } from "../utils/constants";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { addAllProducts } from "../store/filtersSlice";
import { updateFilters, clearFilters, updateSort } from "../store/filtersSlice";
import { useFetchProductsQuery } from "../store/api/productsApiSlice";

const ProductsPage = () => {
  const {
    text,
    color,
    company,
    category,
    companies,
    colors,
    categories,
    price,
    minPrice,
    maxPrice,
    isShippingFree,
    sort,
    filteredProducts,
  } = useSelector((store) => store.filters);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { data, error, isLoading: loading } = useFetchProductsQuery();

  useEffect(() => {
    data?.length > 0 && dispatch(addAllProducts(data));
  }, [data]);

  useEffect(() => {
    dispatch(updateSort(sort));
  }, [filteredProducts]);

  const clearAllFilters = () => {
    dispatch(clearFilters());
  };

  const sortHandler = (type) => {
    dispatch(updateSort(type));
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const updateFilterValues = (name, value) => {
    dispatch(updateFilters({ name, value }));
  };

  return (
    <section className="mb-14">
      <Links home={true} products={"visible"} />
      <div className="flex [@media(max-width:800px)]:flex-col gap-[30px] max-w-[1350px] mx-auto mt-14 p-2 px-[85px] lg:px-5 md:px-3">
        <Filters
          text={text}
          colors={colors}
          color={color}
          companies={companies}
          categories={categories}
          category={category}
          company={company}
          minPrice={minPrice}
          maxPrice={maxPrice}
          price={price}
          search={search}
          setSearch={setSearch}
          isShippingFree={isShippingFree}
          updateFilterValues={updateFilterValues}
          clearFilters={clearAllFilters}
        />
        <ProductList
          filteredProducts={filteredProducts}
          sort={sort}
          updateSort={sortHandler}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
