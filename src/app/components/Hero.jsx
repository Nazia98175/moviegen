import React from "react";
import SectionTag from "./common/SectionTag";

const Hero = () => {
  const heading =
    "text-[36px] md:text-[45px] lg:text-[55px] xl:text-[64px] font-geist font-medium  text-transparent bg-clip-text bg-gradient-to-r from-[#F0A9D3] via-[#F9DEE3] to-[#9691F2] pt-8 mx-auto max-w-[1000px] ";
  const para =
    "text-base lg:text-xl font-medium text-[#D8DFF0] opacity-80 pt-6 max-w-[550px] lg:max-w-[700px] mx-auto";
  return (
    <>
      <div className="pt-16 md:pt-20 lg:pt-24 relative px-4 md:px-5 lg:px-0 ">
        <SectionTag
          title="Welcome to Moviegen new version"
          emoji="/images/png/start-emoji.png"
        />
        <div className="text-center ">
          <div className={heading}>
            <h1>New Era of Edit Videos With AI. </h1>
            <h2 className="text-[#E1E7F5]">No Software, Just Prompt.</h2>
          </div>
          <p className={para}>
            MovieGen turns your words into perfectly cut footage no downloads,
            timelines, or plug-ins required.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
