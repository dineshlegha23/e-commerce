import React, { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import Links from "./Links";

const ProductList = ({ filteredProducts, setSort, sort }) => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <section className="w-full mt-[3px]">
      <div className="flex gap-8 items-center">
        <div className="flex gap-2">
          <svg
            onClick={() => setIsGridView(true)}
            className={`${
              isGridView ? "bg-black/90" : ""
            } border-[1px] p-[3px] rounded-[5px] cursor-pointer`}
            fill={isGridView ? "white" : "black"}
            viewBox="0 0 16 16"
            height={"1.5rem"}
            width={"1.5rem"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
          </svg>
          <svg
            onClick={() => setIsGridView(false)}
            className={`${
              !isGridView ? "bg-black/90" : ""
            } border-[1px] p-[3px] rounded-[5px] cursor-pointer`}
            fill={!isGridView ? "white" : "black"}
            viewBox="0 0 16 16"
            height={"1.5rem"}
            width={"1.5rem"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </div>
        <p className="text-black/80 min-w-fit">
          {filteredProducts.length} Products Found
        </p>
        <span className="inline-block w-full h-[1px] bg-black/20"></span>
        <div className="flex gap-[10px] min-w-fit mr-1">
          <p>Sort By</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            name="sort"
            id="sort"
            className="pr-1 text-[17px]"
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>
      </div>
      {isGridView ? (
        <GridView filteredProducts={filteredProducts} />
      ) : (
        <ListView filteredProducts={filteredProducts} />
      )}
    </section>
  );
};

export default ProductList;
