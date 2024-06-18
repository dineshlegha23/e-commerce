import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "../src/components";
import {
  HomePage,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
} from "./pages";

const App = () => {
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<SingleProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
