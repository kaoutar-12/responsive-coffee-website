import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <>
      <section className="bg-firstcolormedium relative">
        <div className="gap-10 pt-8 flex items-center flex-col border-2 border-red-600 w-screen h-screen bg-firstcolormedium rounded-t-[56px] left-0 -top-16 absolute">
          <button className="shadow-3xl justify-center bg-firstcoloralt text-whitecolor flex flex-row items-center w-44 h-14 rounded-[64px]">
            Scroll Down <FaAngleDown />
          </button>
          <span className="text-white text-center text-base pl-5 pr-5 ">We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.</span>
            <div></div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
