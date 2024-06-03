import React from "react";
import Image from "next/image";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <>
      <section className=" bg-firstcolormedium bg-[url('/bg-coffee-beans.svg')] pb-32 rounded-t-[56px] left-0 -top-36 relative flex justify-center">
        <div className="z-30 relative max-w-screen-3xl w-screen h-screen rounded-t-[56px] pt-10 flex sm:items-center flex-col">
          <span className="font-pacifico text-2xl mdl:text-5xl pr-10 pl-10 text-white text-center">
            Steps of manufacturing our products
          </span>

          <div className=" w-full px-5 flex flex-col mdl:flex-row md:justify-center md:items-center gap-32">
            <div className="md:pt-32 md:pr-24 flex flex-col justify-center items-start">
              <div className=" w-[150px] h-[150px] rounded-full relative bg-firstcolorlight">
                <div className="flex justify-center items-center bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 rounded-full border-[10px] border-firstcolormedium">
                  <span className="text-3xl text-firstcolormedium poppins-semibold">
                    01
                  </span>
                </div>
                <div className="flex justify-center items-center pt-7">
                  <Image
                    src="/steps-green-coffee.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] poppins-regular text-white w-[250px]">
                Harvest occurs annually when the coffee beans reach maturity and
                are collected for processing.
              </span>
            </div>
            <div className=" md:pr-32 md:mb-10 flex flex-col justify-center items-start self-end">
              <div className="w-[150px] h-[150px] rounded-full relative bg-firstcolorlight self-end">
                <div className="flex justify-center items-center bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 rounded-full border-[10px] border-firstcolormedium">
                  <span className="text-3xl text-firstcolormedium poppins-semibold">
                    02
                  </span>
                </div>
                <div className="flex justify-center items-center pt-7">
                  <Image
                    src="/steps-coffee-beans.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] poppins-regular text-end text-white w-[250px]">
                The beans are dried using a wet or dry technique, depending on
                the taste we want to obtain.
              </span>
            </div>
            <div className="md:pr-32 flex flex-col justify-center items-start">
              <div className=" w-[150px] h-[150px] rounded-full relative bg-firstcolorlight">
                <div className=" flex justify-center items-center bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 rounded-full border-[10px] border-firstcolormedium">
                  <span className="text-3xl text-firstcolormedium poppins-semibold">
                    03
                  </span>
                </div>
                <div className="flex justify-center items-center pt-7">
                  <Image
                    src="/steps-ground-coffee_1.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] poppins-regular text-white w-[250px]">
                The coffee is roasted and acquires its flavor by processing the
                grain in ovens.
              </span>
            </div>
          </div>
        </div>
        <div className="max-sm:w-3/4 max-sm:h-3/4 max-sm:mt-24 w-2/4 h-5/6 mdl:w-[650px] mdl:h-[650px] mdl:pt-1 mdl:mt-32 flex justify-center items-center absolute mdl:rotate-90 pt-24 md:pt-56">
          <Image
            src="/Steps_line_dashed.svg"
            alt="coffee-beans"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
