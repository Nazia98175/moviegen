import Image from "next/image";
import React from "react";
import SectionTag from "./common/SectionTag";
import { UnionIcon } from "./common/Icons";

const GetStarted = () => {
  const heading = "common_heading";
  return (
    <>
      <div className="relative">
        <Image
          className="absolute top-0"
          width="1441"
          height="1090"
          src="/images/png/dots-bg.png"
          alt="dots"
        />
        <Image
          className="absolute bottom-0 left-0 z-0 pointer-event-none"
          width="831"
          height="1090"
          src="/images/png/get-started-left-blur.png"
          alt="dots"
        />
        <Image
          className="absolute bottom-0 right-0 z-0 pointer-event-none"
          width="831"
          height="1090"
          src="/images/png/get-started-right-blur.png"
          alt="dots"
        />
        <div
          className="pt-16 md:pt-16 lg:pt-44 pb-16 md:pb-20 lg:pb-26 relative container flex flex-col 
       items-center overflow-hidden"
        >
          <div className="text-center mx-auto max-w-[500px]">
            <Image
              className="text-center mx-auto"
              width="35"
              height="35"
              src="/images/svg/union.svg"
              alt="union"
            />
            <div className={`${heading}`}>
              <h1 className="text-[36px] xl:flex tracking-[-1px] xl:flex-col xl:gap-4 md:text-[45px] lg:text-[56px] leading-[100%] w-fit">
                Professional Videos{" "}
                <span className="text-[#E1E7F5] tracking-[-1.60px] text-[36px] md:text-[45px] lg:text-[56px] leading-[100%] w-fit">
                  In Just a Few Clicks
                </span>
              </h1>
            </div>
            <p
              className={`font-semibold pt-4 tracking-[-0.80px] text-sm md:text-base lg:text-lg text-grayd8`}
            >
              Edit videos with AI, no software needed, just prompt. MovieGen
              turns your words into perfectly cut footage, no downloads,
              timelines, or plug-ins required.
            </p>
            <button className="font-geist font-medium text-base px-3 py-3.5 primary_gradient border border-white rounded-[8px] cursor-pointer mt-12">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
