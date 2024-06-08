import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center max-w-[1350px] mx-auto mt-1 h-[calc(100vh-80px)] px-[85px]">
      <div className="flex flex-col max-w-[550px] gap-8 px-1 text-black/60 text-[20px] font-normal">
        <h1 className="font-bold text-5xl text-black/90 tracking-wider">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="leading-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link
          to={"/products"}
          className="bg-[#ab7a5f] px-6 py-3 rounded-md w-fit uppercase text-white font-light text-base tracking-widest"
        >
          shop now
        </Link>
      </div>
      <div className="relative mr-11">
        <img
          src={heroBcg}
          alt="hero logo"
          className="w-[440px] h-[550px] rounded-md"
        />
        <img
          src={heroBcg2}
          alt="hero logo"
          className="w-[251px] h-[166px] absolute bottom-0 -left-[125px] rounded-sm"
        />
      </div>
    </div>
  );
};

export default Hero;
