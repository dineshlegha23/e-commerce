import React from "react";
import {
  Hero,
  FeaturedProducts,
  Services,
  Contact,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
