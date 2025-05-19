import React from "react";
import SectionTag from "./common/SectionTag";
import Image from "next/image";
import Header from "./Header";

const Hero = () => {
  const heading = "common_heading !ff_suisseIntl_medium";
  const para = "common_para max-w-[550px] lg:max-w-[700px] !font-geist";
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
        <Header />
        <div
          className="pt-14 relative container flex flex-col 
       items-center overflow-hidden"
        >
          <SectionTag title="Welcome to Moviegen new version" emojiIcon="🤩" />
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
          <div className="gradient-border mt-6 md:mt-14 lg:mt-16 p-3 relative rounded-[14px] md:rounded-[18px] lg:rounded-[24px]">
            <Image
              className="hidden md:flex max-h-[300px] absolute bottom-10 -left-[120px] [120px] z-10"
              width="120"
              height="400"
              src="/images/png/img-lines-left.png"
              alt="dots"
            />
            <Image
              className="hidden md:flex max-h-[300px] absolute bottom-10 -right-[120px] [120px] z-10"
              width="120"
              height="400"
              src="/images/png/img-lines-right.png"
              alt="dots"
            />
            <Image
              className="content rounded-[14px] md:rounded-[18px] lg:rounded-[24px]"
              unoptimized
              width="1020"
              height="620"
              src="/images/webp/hero-video-editor.webp"
              alt="video-editor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
