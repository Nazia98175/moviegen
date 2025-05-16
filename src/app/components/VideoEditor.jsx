import React from "react";
import SectionTag from "./common/SectionTag";
import Image from "next/image";
import VideoEditorCards from "./VideoEditorCards";

const VideoEditor = () => {
  const heading = "common_heading";
  const para = "common_para max-w-[550px] lg:max-w-[700px]";
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-32 2xl:max-w-[1040px] 3xl:max-w-[1436px] mx-auto px-4 md:px-5 xl:px-0">
        <SectionTag tagclass="hidden" title="AI Video Editor & Generator" />
        <div className="text-center">
          <div className={heading}>
            <h1>Edit & Generate Videos</h1>
            <h2 className="text-[#E1E7F5]  md:pt-4">Like a Pro With AI</h2>
          </div>
          <p className={para}>
            Simple video editing for everyone. Add subtitles, text, music, and
            much more to your videos with just a few clicks.
          </p>
        </div>
        <VideoEditorCards />
      </div>
    </>
  );
};

export default VideoEditor;
