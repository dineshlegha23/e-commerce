import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Links from "./Links";

const ProductList = () => {
  return (
    <div>
      <Links />
    </div>
  );
};

export default ProductList;
