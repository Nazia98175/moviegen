import React from "react";
import Image from "next/image";
import SectionTag from "./common/SectionTag";

const features = [
  {
    id: 1,
    title: "No Timelines, Toolbars, Tutorials.",
    description:
      "Your words become keyframes, transitions, captions, and color grades, bringing your vision to life with precision and creativity automatically.",
    icon: "/images/svg/feature-icon.svg",
  },
  {
    id: 2,
    title: "Studio-Level Tweaks, No Knobs.",
    description:
      "Ask for cinematic LUTs, noise-free audio, dynamic subtitles, or TikTok-ready formats. Moviegen handles every setting under the hood.",
    icon: "/images/svg/feature-icon.svg",
  },
  {
    id: 3,
    title: "Iterate At Light Speed.",
    description:
      "Change one detail or the whole story mid conversation. Our AI re-cuts, re-renders, and refines everything seamlessly in just seconds.",
    icon: "/images/svg/feature-icon.svg",
  },
  {
    id: 4,
    title: "Collaborative Editing.",
    description:
      "Invite team members and collaborate effortlessly in creating perfect content, with AI-powered tools that streamline every step of the process.",
    icon: "/images/svg/feature-icon.svg",
  },
];

const Features = () => {
  return (
    <section className="container pt-24 pb-32 flex flex-col items-center relative">
      <SectionTag emoji="/images/png/start-emoji.png" title="Why Moviegen?" />

      <div className="grid grid-cols-3 gap-6 mt-12 max-w-6xl">
        {/* Top Left */}
        <div className="col-span-1 bg-[#0A0A0A] rounded-xl border border-[#1C1C1C] p-6 flex flex-col gap-4">
          <Image src={features[0].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[0].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[0].description}</p>
          <button className="mt-auto text-sm px-4 py-1 rounded-lg border border-[#444] hover:bg-white hover:text-black transition-all w-max">
            Learn More
          </button>
        </div>

        {/* Center Logo (top) */}
        <div className="row-span-2 flex justify-center items-center">
          <div className="w-[120px] h-[120px] bg-gradient-to-br from-[#ffffff10] to-[#ffffff08] border border-[#2a2a2a] rounded-xl flex items-center justify-center shadow-inner">
            <Image
              src="/images/svg/center-logo.svg"
              alt="center logo"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Top Right */}
        <div className="col-span-1 bg-[#0A0A0A] rounded-xl border border-[#1C1C1C] p-6 flex flex-col gap-4">
          <Image src={features[1].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[1].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[1].description}</p>
          <button className="mt-auto text-sm px-4 py-1 rounded-lg border border-[#444] hover:bg-white hover:text-black transition-all w-max">
            Learn More
          </button>
        </div>

        {/* Bottom Left */}
        <div className="col-span-1 bg-[#0A0A0A] rounded-xl border border-[#1C1C1C] p-6 flex flex-col gap-4">
          <Image src={features[2].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[2].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[2].description}</p>
          <button className="mt-auto text-sm px-4 py-1 rounded-lg border border-[#444] hover:bg-white hover:text-black transition-all w-max">
            Learn More
          </button>
        </div>

        {/* Spacer (for bottom center) */}
        <div />

        {/* Bottom Right */}
        <div className="col-span-1 bg-[#0A0A0A] rounded-xl border border-[#1C1C1C] p-6 flex flex-col gap-4">
          <Image src={features[3].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[3].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[3].description}</p>
          <button className="mt-auto text-sm px-4 py-1 rounded-lg border border-[#444] hover:bg-white hover:text-black transition-all w-max">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
