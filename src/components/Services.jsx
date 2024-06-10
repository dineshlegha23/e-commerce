import React from "react";
import { services } from "../utils/constants";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const Services = () => {
  return (
    <section className="bg-brown/25 h-[470px] xl:h-full xl:pb-16">
      <div className="flex justify-between lg:flex-col gap-20 lg:gap-8 max-w-[1350px] px-[85px] lg:px-8 md:px-5 py-20 lg:py-10 mx-auto mb-3">
        <h3 className="text-[32px] md:text-2xl min-w-max lg:min-w-full font-bold tracking-wider leading-none text-[#453227]">
          Custom Furniture <br />
          Built Only For You
        </h3>
        <p className="w-[600px] md:text-sm lg:w-full text-[#795744] leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <ul className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1350px] mx-auto px-[85px] lg:px-8 md:px-5">
        <li className=" bg-[#c5a491] text-center py-10 px-8 flex flex-col gap-3">
          <GiCompass
            size={65}
            className="mx-auto text-[#453227] bg-white/60 rounded-full p-4"
          />
          <h4 className="text-2xl text-[#453227] font-bold tracking-wider">
            Mission
          </h4>
          <p className="text-[#5f4435] leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </li>
        <li className=" bg-[#c5a491] text-center py-10 px-8 flex flex-col gap-3">
          <GiDiamondHard
            size={65}
            className="mx-auto text-[#453227] bg-white/60 rounded-full p-4"
          />
          <h4 className="text-2xl text-[#453227] font-bold tracking-wider">
            Vision
          </h4>
          <p className="text-[#5f4435] leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </li>
        <li className=" bg-[#c5a491] text-center py-10 px-8 flex flex-col gap-3">
          <GiStabbedNote
            size={65}
            className="mx-auto text-[#453227] bg-white/60 rounded-full p-4"
          />
          <h4 className="text-2xl text-[#453227] font-bold tracking-wider">
            History
          </h4>
          <p className="text-[#5f4435] leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
