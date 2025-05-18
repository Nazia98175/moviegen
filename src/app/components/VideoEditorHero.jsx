import Image from "next/image";
import SectionTag from "./common/SectionTag";

const VideoEditorHero = () => {
  const heading = "common_heading !font-suisseintl !font-medium";
  return (
    <section className="mt-20 lg:mt-40 px-4 md:px-5 xl:px-0 relative z-10">
      <div className="relative flex flex-col items-center justify-center overflow-visible mt-10">
        <Image
          className="absolute bottom-28 -left-20 m-auto opacity-80"
          width="2560"
          height="500"
          src="/images/png/dots-bg.png"
          alt="dots"
        />
        <img
          src="/images/svg/video-blur-bg.svg"
          alt="video-blur"
          className="absolute transform left-0 -translate-y-86 blur-xl opacity-70"
        />
        <img
          src="/images/svg/video-editing-2.svg"
          alt="video-blur"
          className="absolute transform translate-y-20 right-0 opacity-60 blur-3xl z-20"
        />
        <img
          src="/images/svg/video-editor-blur-side.svg"
          alt="video-blur"
          className="absolute transform -translate-y-14 right-0 opacity-20 blur-3xl"
        />
        <div className="relative">
          <div className={heading}>
            <SectionTag
              title="Trusted by Our Users"
              tagclass="hidden"
            />
            <div className={heading}>
              <h1 className="text-center">Experience AI Editing</h1>
              <h2 className="text-[#E1E7F5] text-center md:pt-4 ">
                That Feels Like Magic.
              </h2>
            </div>
          </div>
          {/* Main Editor UI */}
          <div className="relative">
            <div className="absolute top-2 lg:top-4 xl:top-10 left-24 lg:left-28 xl:left-36 transform translate-y-1/12 hidden md:flex items-start gap-3 z-20">
              {/* Chat bubble */}
              <div className="flex flex-col w-[150px] lg:w-[200px] xl:w-[237.6px]">
                <div
                  className="bg-[#0F0E1A] border border-[#8A6FC4] text-white rounded-2xl px-5 py-3 mb-2 lg:mb-4 text-sm max-w-xs shadow-xl relative"
                  style={{ boxShadow: "0 0 12px rgba(138, 111, 196, 0.4)" }}
                >
                  <p className="mb-4 xl:mb-10 text-nowrap">
                    Shorten the intro to 3 seconds|
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex justify-end gap-2 items-center">
                  <button className="text-xs px-4 py-2 text-sm font-semibold text-white">
                    Cancel
                  </button>

                  <button className="px-4 lg:px-[18px] py-1 primary_gradient border border-white rounded-[8px] cursor-pointer text-[#0D0C0F] flex items-center gap-1 font-semibold text-shadow-lg">
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
            <img
              src="/images/svg/trusted-users-image.svg"
              className="relative z-10 mt-16"
            />
          </div>

          {/* Bottom text */}
          <div className="relative z-10 max-w-2xl text-center max-w-[610px] m-auto">
            <p className="text-[#D8DFF0CC] text-base lg:text-xl font-medium leading-[150%] !font-geist">
              Moviegen turns that chaos into a single chat bubble. Just type
              what you want “Trim the silence, punch-zoom on the laugh, match
              the colors to a 90s film vibe” and watch fully polished footage
              appear in moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditorHero;
