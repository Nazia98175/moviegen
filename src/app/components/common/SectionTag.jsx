import React from "react";
import Image from "next/image";

const SectionTag = ({ title, emoji, tagclass, emojiIcon }) => {
  const className =
    "text-sm lg:text-base font-inter-tight font-medium  text-transparent bg-clip-text bg-gradient-to-r from-[#F0A9D3] via-[#F9DEE3] to-[#9691F2]";
  return (
    <div className="flex items-center justify-center px-3.5 py-2.5 border border-lightpurple44 gap-x-2 bg-primary w-full max-w-fit mx-auto rounded-[10px] shadow-[0px_8px_8px_0px_#A37EF229]">
      {emoji && (
        <Image
          className={tagclass}
          width={18}
          height={18}
          src={emoji}
          alt="emoji"
        />
      )}
      {emojiIcon && emojiIcon}
      <h4 className={className}>{title}</h4>
    </div>
  );
};

export default SectionTag;
