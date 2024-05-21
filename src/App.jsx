import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import {
  HomePage,
  AboutPage,
  CartPage,
  // CheckoutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
} from "./pages";

const App = () => {
  return (
    <div className="max-w-[1500px]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<SingleProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
