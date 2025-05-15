import React from "react";
import SectionTag from "./common/SectionTag";
import Image from "next/image";

const Hero = () => {
  const heading = "common_heading";
  const para = "common_para max-w-[550px] lg:max-w-[700px]";
  return (
    <>
      <div
        className="pt-16 md:pt-16 lg:pt-24 relative container flex flex-col 
       items-center"
      >
        <SectionTag
          title="Welcome to Moviegen new version"
          emoji="/images/png/start-emoji.png"
        />
        <div className="text-center">
          <div className={heading}>
            <h1>New Era of Edit Videos With AI. </h1>
            <h2 className="text-[#E1E7F5]  md:pt-4">
              No Software, Just Prompt.
            </h2>
          </div>
          <p className={para}>
            MovieGen turns your words into perfectly cut footage no downloads,
            timelines, or plug-ins required.
          </p>
        </div>
        <Image
          className="pt-10 md:pt-14 lg:pt-16"
          width="1020"
          height="620"
          src="/images/svg/hero-video-editor.svg"
          alt="video-editor"
        />
      </div>
    </>
  );
};

export default Hero;
