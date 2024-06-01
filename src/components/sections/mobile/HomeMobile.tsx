/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";

const HomeMobile = () => {
  return (
    <>
      <section className="flex w-screen h-screen border-2 bg-gradient-to-t from-firstcoloralt to-firstcolormedium border-blue-400 justify-center pt-10 gap-8">
        <div className="max-md:w-80 max-md:h-96 flex items-center md:items-start flex-row-reverse max-md:flex-col gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <span className="text-secondcolor text-sm">
              EXCEPTIONAL QUALITY
            </span>
            <div className="flex relative items-center mx-auto left-3">
              <span className="text-5xl font-pacifico text-whitecolor">
                It's time for a good coffee
              </span>
              <span className="w-24 h-24 self-end absolute right-2 -bottom-10">
                <Image
                  src="/coffee1.svg"
                  alt="coffee"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <span className="text-white font-light text-center ">
                Each select coffee bean reflects our commitment to Peruvian
                coffee growers, who bring the best select coffee to your table.
              </span>
              <button className="bg-secondcolor w-44 h-14 rounded-[64px] flex flex-row justify-center items-center gap-2 shadow-3xl shadow-secondcolor">
                Get Started <MdNavigateNext className="size-6" />
              </button>
            </div>
          </div>
          <div className="w-80 h-[354]">
            <Image
              src="/home-coffee.svg"
              alt="coffee"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMobile;