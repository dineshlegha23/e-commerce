import React, { useEffect, useState } from "react";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = ({
  updateFilterValues,
  clearFilters,
  categories,
  companies,
  colors,
  search,
  setSearch,
  category,
  company,
  color,
  minPrice,
  maxPrice,
  price,
  isShippingFree,
}) => {
  return (
    <article className="w-[234px] px-1 h-fit sticky [@media(max-width:800px)]:relative top-4 bottom-0">
      <div className="flex flex-col gap-[14px] ">
        <form>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            type="text"
            className="bg-[#f1f5f9] w-[190px] py-[6px] px-2 rounded-md tracking-wider font-medium placeholder:text-black/50"
            placeholder="Search"
          />
        </form>
        <div>
          <h5 className="font-bold  text-black/70 tracking-widest my-1">
            Category
          </h5>
          <ul className="text-[#617d98] text-sm flex flex-col gap-[4px] mt-2 tracking-widest capitalize">
            <li>
              <button
                name="category"
                className={`${
                  category === "all" ? "" : "border-transparent"
                } pb-[2px] border-b-[1px] w-fit tracking-widest`}
                onClick={(e) => updateFilterValues(e.target.name, "all")}
              >
                All
              </button>
            </li>
            {categories.map((currentCategory) => (
              <li key={currentCategory}>
                <button
                  name="category"
                  className={`${
                    currentCategory === category ? "" : "border-transparent"
                  } pb-[2px] border-b-[1px] w-fit capitalize tracking-widest`}
                  onClick={(e) =>
                    updateFilterValues(e.target.name, currentCategory)
                  }
                >
                  {currentCategory}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold  text-black/70 tracking-widest my-1">
            Company
          </h5>
          <select
            onChange={(e) => updateFilterValues(e.target.name, e.target.value)}
            value={company}
            name="company"
            id="company"
            className="bg-[#f1f5f9] rounded-md py-1 px-1 mt-1 text-xs"
          >
            <option value="all">all</option>
            {companies.map((currentCompany) => (
              <option
                value={currentCompany}
                key={currentCompany}
                className="capitalize"
              >
                {currentCompany}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h5 className="font-bold  text-black/70 tracking-widest my-1">
            Colors
          </h5>
          <div className="flex gap-2 items-center py-[6px] text-[#617d98] tracking-widest mb-4">
            <button
              name="color"
              onClick={(e) => updateFilterValues(e.target.name, "all")}
              className={`tracking-wider text-sm pb-[2px] border-b-[1px] ${
                color === "all" ? "" : "border-transparent"
              }`}
            >
              All
            </button>
            {colors.map((currentColor) => (
              <button
                key={currentColor}
                name="color"
                onClick={(e) => updateFilterValues(e.target.name, currentColor)}
                style={{ backgroundColor: currentColor }}
                className={`w-4 h-4 rounded-full flex justify-center items-center ${
                  currentColor === color ? "opacity-100" : "opacity-50"
                }`}
              >
                {currentColor === color && <FaCheck color="white" size={10} />}
              </button>
            ))}
          </div>
          <div>
            <h5 className="font-bold  text-black/70 tracking-widest my-1">
              Price
            </h5>
            <p className="mb-1 text-black/70">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={(e) =>
                updateFilterValues(e.target.name, Number(e.target.value))
              }
            />
          </div>
        </div>
        <div className="flex justify-between w-40">
          <h5 className="text-black/70 my-2">Free Shipping</h5>
          <input
            type="checkbox"
            name="isShippingFree"
            id="isShippingFree"
            checked={Boolean(isShippingFree)}
            value={Boolean(isShippingFree)}
            onChange={(e) => updateFilterValues(e.target.name, e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={clearFilters}
        className="text-sm px-[8px] py-[2px] mt-2 tracking-widest bg-[#bb2525] text-white rounded-md"
      >
        Clear Filters
      </button>
    </article>
  );
};

export default Filters;
