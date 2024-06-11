import React from "react";
import aboutImg from "../assets/hero-bcg.jpeg";
import Links from "../components/Links";

const AboutPage = () => {
  return (
    <section className="mb-20  min-h-[calc(100vh-128px-30px-80px)] ">
      <Links home={true} link={"About"} />
      <div className="max-w-[1350px] mx-auto px-[85px] lg:px-10 md:px-5 xs:px-3 mt-20 grid grid-cols-2 lg:grid-cols-1 gap-16">
        <img
          src={aboutImg}
          alt="table image"
          className="w-[555px] lg:w-full h-[500px] object-cover"
        />
        <div className="max-w-[550px] lg:max-w-full">
          <h2 className="mb-3 leading-10 font-bold tracking-wider text-[40px] text-[#102a42]">
            Our Story
          </h2>
          <hr className="border-0 w-[100px] bg-[#030302] h-1 mb-8" />
          <p className="leading-8 text-[#617d98] lg:ml-10 md:ml-0 md:text-sm tracking-widest md:leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
