import Image from "next/image";
import SectionTag from "./SectionTag";

const VideoEditorHero = () => {
  const heading = "common_heading";
  return (
    <div className="mt-40">
      <div className={heading}>
        <SectionTag title="Trusted by Our Users" tagclass="hidden" />
        <div className={heading}>
          <h1 className="text-center">Experience AI Editing</h1>
          <h2 className="text-[#E1E7F5] text-center md:pt-4">
            That Feels Like Magic.
          </h2>
        </div>
      </div>
      <section className="relative group flex flex-col items-center justify-center overflow-visible mt-10">
        <Image
          className="absolute -top-60 -left-60"
          width="1441"
          height="500"
          src="/images/png/dots-bg.png"
          alt="dots"
        />
        {/* Main Editor UI */}
        <div className="relative">
          <div className="absolute top-10 -left-44 flex items-start gap-3 z-20">
            {/* Chat bubble */}
            <div className="flex flex-col w-auto xl:w-[237.6px]">
              <div
                className="bg-[#0F0E1A] border border-[#8A6FC4] text-white rounded-2xl px-5 py-3 mb-4 text-sm max-w-xs shadow-xl relative"
                style={{ boxShadow: "0 0 12px rgba(138, 111, 196, 0.4)" }}
              >
                <p className="mb-10">Shorten the intro to 3 seconds|</p>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-2 items-center">
                <button className="text-xs px-4 py-2 text-sm font-semibold text-white">
                  Cancel
                </button>

                <button className="px-[18px] py-1 primary_gradient border border-white rounded-[8px] cursor-pointer text-[#0D0C0F] flex items-center gap-1 font-semibold text-shadow-lg">
                  <Image
                    width="16"
                    height="16"
                    src="/images/svg/send-icon.svg"
                    alt="arrow"
                    className="w-[15px] h-[16px]"
                  />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
          <img src="/images/svg/trusted-users-image.svg" alt="" />
        </div>

        {/* Bottom text */}
        <div className="relative z-10 max-w-2xl text-center mt-20 max-w-[580px]">
          <p className="text-[#D8DFF0CC] text-xl font-medium leading-[150%]">
            Moviegen turns that chaos into a single chat bubble. Just type what
            you want “Trim the silence, punch-zoom on the laugh, match the
            colors to a 90s film vibe” and watch fully polished footage appear
            in moments.
          </p>
        </div>
      </section>
      <img
        src="/images/svg/video-blur-bg.svg"
        alt=""
        className="absolute transform -translate-y-2/2 blur-xl opacity-70"
      />
      <img
        src="/images/svg/video-editing-2.svg"
        alt=""
        className="absolute transform -translate-y-5/8 right-0 opacity-60 blur-3xl"
      />
    </div>
  );
};

export default VideoEditorHero;
