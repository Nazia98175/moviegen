import React from "react";
import SectionTag from "./common/SectionTag";
import VideoEditorCards from "./VideoEditorCards";
import Image from "next/image";

const VideoEditor = () => {
  const heading = "common_heading !ff_suisseIntl_medium";
  const para = "common_para max-w-[560px] !font-geist";
  return (
    <div className="pt-20 md:pt-24 lg:pt-32 max-w-[1120px] mx-auto px-4 md:px-5 xl:px-0 relative z-10">
      <Image
        className="w-full max-w-[952px] absolute left-1/2  translate-x-[-50%] top-[70%] z-[0]"
        src={"/images/png/generate-video-blur.png"}
        height={100}
        width={400}
        alt="hero-bg-blur"
      />
      <SectionTag tagclass="hidden" title="AI Video Editor & Generator" />
      <div className="text-center">
        <div className={heading}>
          <h2>Edit & Generate Videos</h2>
          <h2 className="text-[#E1E7F5]  md:pt-4">Like a Pro With AI</h2>
        </div>
        <p className={para}>
          Simple video editing for everyone. Add subtitles, text, music, and
          much more to your videos with just a few clicks.
        </p>
      </div>
      <VideoEditorCards />
    </div>
  );
};

export default VideoEditor;
