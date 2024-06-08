import React from "react";

const Contact = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-[85px] mt-[235px] mb-56">
      <h3 className="text-[#102a42] text-[32px] font-bold tracking-wider">
        Join our newsletter and get 20% off
      </h3>
      <div className="flex justify-between items-center gap-20">
        <p className="text-black/60 leading-8 mt-5 w-[1050px] pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <div className="w-full text-right">
          <input
            className="border-2 w-4/6 py-[6px] pl-4 rounded-s-md border-e-0 placeholder:text-black"
            type="email"
            placeholder="Enter Email..."
          />
          <button className="bg-brown px-5 py-[6px] border-2 tracking-widest">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
