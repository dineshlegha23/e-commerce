import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListView = ({ filteredProducts }) => {
  return (
    <section className="flex flex-col gap-16 mt-[35px]">
      {filteredProducts.map((product) => (
        <div key={product.id} className="flex gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="min-w-[300px] h-[200px] rounded-sm"
          />
          <div className="flex flex-col justify-center gap-3 mt-4">
            <div>
              <h3 className="font-bold text-[23px] text-[#102a42] tracking-widest capitalize ">
                {product.name}
              </h3>
              <p className="text-brown/90 font-bold tracking-widest">
                {formatPrice(product.price)}
              </p>
            </div>
            <p className="text-black/70">
              {product.description.length > 150
                ? product.description.slice(0, 150) + "..."
                : product.description}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="bg-brown text-[9px] text-white/60 px-2 py-[4px] w-fit rounded-sm tracking-widest my-2"
            >
              DETAILS
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListView;
