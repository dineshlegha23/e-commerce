import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const GridView = ({ filteredProducts }) => {
  // const { allProducts } = useSelector((store) => store.products);

  return (
    <section className="grid grid-cols-3 gap-5 mt-[35px]">
      {filteredProducts?.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          gridView={true}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </section>
  );
};

export default GridView;
