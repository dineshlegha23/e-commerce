import React from "react";

const Contact = () => {
  return (
    <section className="max-w-[1350px] lg:max-w-[700px] lg:mx-0 mx-auto px-[85px] lg:px-8 md:px-5 mt-[235px] xl:mt-24 mb-56 lg:mb-20">
      <h3 className="text-[#102a42] text-[32px] md:text-2xl font-bold tracking-wider">
        Join our newsletter and get 20% off
      </h3>
      <div className="flex lg:flex-col justify-between lg:items-start items-center gap-20 lg:gap-5">
        <p className="text-black/60 leading-8 mt-5 w-[1050px] lg:w-full pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <div className="w-full text-right lg:text-center">
          <input
            className="border-2 w-4/6 xs:w-3/6 py-[6px] pl-4 rounded-s-md border-e-0 placeholder:text-black"
            type="email"
            placeholder="Enter Email..."
          />
          <button className="bg-brown px-5 xs:px-2 py-[6px] border-2 tracking-widest">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
