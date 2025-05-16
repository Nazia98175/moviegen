import Image from "next/image";
import React from "react";
import SectionTag from "./common/SectionTag";
import { UnionIcon } from "./common/Icons";

const GetStarted = () => {
  const heading = "common_heading";
  const para = "common_para max-w-[550px] lg:max-w-[600px]";
  return (
    <>
      <div className="relative pb-28">
        <Image
          className="absolute top-0"
          width="1441"
          height="1090"
          src="/images/png/dots-bg.png"
          alt="dots"
        />
        <Image
          className="absolute bottom-0 left-0"
          width="831"
          height="1090"
          src="/images/png/get-started-left-blur.png"
          alt="dots"
        />
        <Image
          className="absolute bottom-0 right-0"
          width="831"
          height="1090"
          src="/images/png/get-started-right-blur.png"
          alt="dots"
        />
        <div
          className="pt-16 md:pt-16 lg:pt-44 relative container flex flex-col 
       items-center overflow-hidden"
        >
          <div className="text-center">
            <Image
              className="text-center mx-auto"
              width="35"
              height="35"
              src="/images/svg/union.svg"
              alt="union"
            />
            <div className={heading}>
              <h1>Professional Videos </h1>
              <h2 className="text-[#E1E7F5]  md:pt-4">In Just a Few Clicks</h2>
            </div>
            <p className={para}>
              Edit videos with AI, no software needed, just prompt. MovieGen
              turns your words into perfectly cut footage, no downloads,
              timelines, or plug-ins required.
            </p>
            <button className="font-geist px-3 py-3.5 primary_gradient border border-white rounded-[8px] cursor-pointer mt-10">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
