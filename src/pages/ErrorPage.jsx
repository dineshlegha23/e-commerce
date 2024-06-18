import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="h-[calc(100vh-174px)] bg-brown/35 flex flex-col justify-center gap-10 items-center px-[85px] md:px-5 xs:px-3">
      <h2 className="text-8xl font-bold tracking-wider">404</h2>
      <p className="text-2xl font-semibold">
        Sorry, the page you tried cannot be found
      </p>
      <Link to={"/"} className="bg-brown py-1 px-3 rounded-md text-white">
        BACK HOME
      </Link>
    </section>
  );
};

export default ErrorPage;
