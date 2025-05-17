import React from "react";
import Image from "next/image";
import SectionTag from "./common/SectionTag";

const features = [
  {
    id: 1,
    title: "No Timelines, Toolbars, Tutorials.",
    description:
      "Your words become keyframes, transitions, captions, and color grades, bringing your vision to life with precision and creativity automatically.",
    icon: "/images/svg/loading-icon.svg",
  },
  {
    id: 2,
    title: "Studio-Level Tweaks, No Knobs.",
    description:
      "Ask for cinematic LUTs, noise-free audio, dynamic subtitles, or TikTok-ready formats. Moviegen handles every setting under the hood.",
    icon: "/images/svg/loading-icon.svg",
  },
  {
    id: 3,
    title: "Iterate At Light Speed.",
    description:
      "Change one detail or the whole story mid conversation. Our AI re-cuts, re-renders, and refines everything seamlessly in just seconds.",
    icon: "/images/svg/loading-icon.svg",
  },
  {
    id: 4,
    title: "Collaborative Editing.",
    description:
      "Invite team members and collaborate effortlessly in creating perfect content, with AI-powered tools that streamline every step of the process.",
    icon: "/images/svg/loading-icon.svg",
  },
];

const Features = () => {
  return (
    <section className="container pt-20 xl:pb-32 flex flex-col items-center relative px-2">
     

      {/* Main 3x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-3 xl:gap-0 mt-12 w-full max-w-[1020px]">
        {/* Row 1 */}
        <div className="bg-[#0D0D0D]/80 w-auto rounded-xl border border-[#444362]/52 p-6 flex flex-col gap-4">
          <Image src={features[0].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[0].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[0].description}</p>
          <div className="inline-block rounded-[6px] w-fit p-[1px] bg-[linear-gradient(91.18deg,rgba(240,169,211,0.5)_0%,rgba(249,222,227,0.5)_49.52%,rgba(150,145,242,0.5)_100%)] mt-auto">
            <button className="text-[#D8DFF0]/84 px-[10px] py-[5px] flex items-center justify-center rounded-[6px] bg-[#181825] text-sm font-medium shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.10),inset_0px_0px_6px_2px_rgba(163,126,242,0.12),0px_8px_12px_0px_rgba(163,126,242,0.16)]">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <img src="/images/svg/rectangle-1.svg" alt="rectangle-1" />
        </div>
        <div className="bg-[#0D0D0D]/80 w-auto rounded-xl border border-[#444362]/52 p-6 flex flex-col gap-4">
          <Image src={features[1].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[1].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[1].description}</p>
          <div className="inline-block rounded-[6px] w-fit p-[1px] bg-[linear-gradient(91.18deg,rgba(240,169,211,0.5)_0%,rgba(249,222,227,0.5)_49.52%,rgba(150,145,242,0.5)_100%)] mt-auto">
            <button className="text-[#D8DFF0]/84 px-[10px] py-[5px] flex items-center justify-center rounded-[6px] bg-[#181825] text-sm font-medium shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.10),inset_0px_0px_6px_2px_rgba(163,126,242,0.12),0px_8px_12px_0px_rgba(163,126,242,0.16)]">
              Learn More
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="hidden xl:flex items-center justify-center">
          <img src="/images/svg/rectangle-2.svg" alt="rectangle-2" />
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <div className="p-[0.83px] rounded-xl bg-gradient-to-br from-[rgba(240,169,211,0.5)] via-[rgba(249,222,227,0.5)] to-[rgba(150,145,242,0.5)]">
            <div className="bg-gradient-to-br w-[200px] h-[200px] from-[#ffffff10] to-[#ffffff08] rounded-[calc(0.75rem-0.83px)] shadow-inner flex items-center justify-center">
              <div className="bg-[#05060E] p-4 w-[199px] h-[199px] rounded-[calc(0.75rem-0.83px)] flex items-center justify-center">
                <Image
                  src="/images/svg/center-logo.svg"
                  alt="center logo"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <img src="/images/svg/rectangle-3.svg" alt="rectangle-3" />
        </div>

        {/* Row 3 */}
        <div className="bg-[#0D0D0D]/80 w-auto rounded-xl border border-[#444362]/52 p-6 flex flex-col gap-4">
          <Image src={features[2].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[2].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[2].description}</p>
          <div className="inline-block rounded-[6px] w-fit p-[1px] bg-[linear-gradient(91.18deg,rgba(240,169,211,0.5)_0%,rgba(249,222,227,0.5)_49.52%,rgba(150,145,242,0.5)_100%)] mt-auto">
            <button className="text-[#D8DFF0]/84 px-[10px] py-[5px] flex items-center justify-center rounded-[6px] bg-[#181825] text-sm font-medium shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.10),inset_0px_0px_6px_2px_rgba(163,126,242,0.12),0px_8px_12px_0px_rgba(163,126,242,0.16)]">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <img src="/images/svg/rectangle-4.svg" alt="rectangle-4" />
        </div>
        <div className="bg-[#0D0D0D]/80 w-auto rounded-xl border border-[#444362]/52 p-6 flex flex-col gap-4">
          <Image src={features[3].icon} alt="icon" width={32} height={32} />
          <h3 className="text-white text-lg font-semibold">
            {features[3].title}
          </h3>
          <p className="text-[#A1A1AA] text-sm">{features[3].description}</p>
          <div className="inline-block rounded-[6px] w-fit p-[1px] bg-[linear-gradient(91.18deg,rgba(240,169,211,0.5)_0%,rgba(249,222,227,0.5)_49.52%,rgba(150,145,242,0.5)_100%)] mt-auto">
            <button className="text-[#D8DFF0]/84 px-[10px] py-[5px] flex items-center justify-center rounded-[6px] bg-[#181825] text-sm font-medium shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.10),inset_0px_0px_6px_2px_rgba(163,126,242,0.12),0px_8px_12px_0px_rgba(163,126,242,0.16)]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
