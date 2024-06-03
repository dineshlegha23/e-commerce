import React, { useEffect, useState } from "react";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = ({
  categories,
  companies,
  colors,
  search,
  setSearch,
  category,
  setCategory,
  company,
  setCompany,
  color,
  setColor,
  minPrice,
  maxPrice,
  price,
  setPrice,
  isShippingFree,
  setIsShippingFree,
}) => {
  function handleClear() {
    setSearch("");
    setCategory("all");
    setCompany("all");
    setColor("all");
    setPrice(309999);
    setIsShippingFree(false);
  }

  return (
    <article className="w-[234px] px-1 mx-auto h-fit sticky top-3 bottom-0">
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
                className={`${
                  category === "all" ? "" : "border-transparent"
                } pb-[2px] border-b-[1px] w-fit tracking-widest`}
                onClick={() => setCategory("all")}
              >
                All
              </button>
            </li>
            {categories.map((currentCategory) => (
              <li key={currentCategory}>
                <button
                  className={`${
                    currentCategory === category ? "" : "border-transparent"
                  } pb-[2px] border-b-[1px] w-fit capitalize tracking-widest`}
                  onClick={() => setCategory(currentCategory)}
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
            onChange={(e) => setCompany(e.target.value)}
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
              onClick={() => setColor("all")}
              className={`tracking-wider text-sm pb-[2px] border-b-[1px] ${
                color === "all" ? "" : "border-transparent"
              }`}
            >
              All
            </button>
            {colors.map((currentColor) => (
              <button
                key={currentColor}
                onClick={() => setColor(currentColor)}
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
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between w-40">
          <h5 className="text-black/70 my-2">Free Shipping</h5>
          <input
            type="checkbox"
            name="freeShipping"
            id="freeShipping"
            checked={isShippingFree}
            onChange={() => setIsShippingFree(!isShippingFree)}
          />
        </div>
      </div>
      <button
        onClick={handleClear}
        className="px-3 text-sm py-1 mt-3 tracking-wider bg-[#bb2525] text-white rounded-md"
      >
        Clear Filters
      </button>
    </article>
  );
};

export default Filters;
