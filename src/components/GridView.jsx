import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const GridView = () => {
  const { allProducts } = useSelector((store) => store.products);
  console.log(allProducts);
  return (
    <section className="grid grid-cols-3 gap-5 mt-[35px]">
      {allProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          gridView={true}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}

      <Product
        gridView={true}
        name={"Modern Poster"}
        price={"599.99"}
        image={"https://www.course-api.com/images/store/product-12.jpeg"}
      />
      <Product
        gridView={true}
        name={"Modern Poster"}
        price={"599.99"}
        image={"https://www.course-api.com/images/store/product-12.jpeg"}
      />
      <Product
        name={"Modern Poster"}
        price={"599.99"}
        image={"https://www.course-api.com/images/store/product-12.jpeg"}
      />
      <Product
        name={"Modern Poster"}
        price={"599.99"}
        image={"https://www.course-api.com/images/store/product-12.jpeg"}
      />
      <Product
        name={"Modern Poster"}
        price={"599.99"}
        image={"https://www.course-api.com/images/store/product-12.jpeg"}
      />
    </section>
  );
};

export default GridView;
