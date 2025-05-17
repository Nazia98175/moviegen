import Image from "next/image";
import React from "react";

const VideoEditorCards = () => {
  return (
    <>
      <div className="text-white pt-10 md:pt-12 lg:pt-16 xl:pt-[72px] hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Block 1: Left Column Large Card */}
          <div className="bg-darkblue0d border border-[#1f1f2b] rounded-2xl w-[364px] overflow-hidden p-4 md:p-5 lg:p-6 xl:p-8  flex flex-col col-start-1 col-end-2">
            <Image
              src="/images/svg/editor-icon.svg" // replace with actual image
              alt="feature"
              width={22}
              height={22}
              className=""
            />
            <h3 className="text-secondary text-base font-geist font-medium pt-4">
              Why Creators Switch to Moviegen
            </h3>
            <p className="text-base text-white font-medium pt-3 mb-4">
              Zero software, zero learning curve – open a chat, say what you
              need, edit your videos.
            </p>
            <div
              className="relative w-fit rounded-2xl p-[2px]" // Outer border thickness + roundness
              // style={{
              //   border: "1.6px solid #27272A",
              // }}
            >
              <div
                className="rounded-2xl p-[1.6px] relative z-10 overflow-hidden" // Gradient border padding + rounding
                style={{
                  background:
                    "linear-gradient(96.84deg, #96547B 0%, #5A3B4A 30%, #4941D9 100%)",
                  boxShadow: `
        0px 0px 0px 3.9px #FF4DBB1F,
        0px 0px 0px 1.3px #FFFFFF1A,
        0px 65.02px 42.91px 0px #DE4AA50F,
        0px 65.02px 31.21px 7.8px #DE4AA514
      `,
                }}
              >
                <div className="relative rounded-2xl  bg-[#121218]">
                  <Image
                    src="/images/png/video-edit-1.jpg"
                    alt="feature"
                    width={600}
                    height={300}
                    className="xl:w-[307.4px] h-[172.91px] object-cover object-center"
                  />

                  {/* Text Overlay */}
                  <div className="absolute bottom-2 left-12 px-2 py-1 rounded m-auto">
                    <h2 className="text-white text-[24.41px] text-center font-extrabold leading-none stroke-text-white">
                      This street?
                    </h2>
                    <h3 className="text-[#796DFF] text-[24.41px] text-center font-extrabold uppercase leading-none stroke-text-purple">
                      ICONIC.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -left-10 z-0 rotate-[176.34]">
                <img
                  src="/images/svg/this-street-icon.svg"
                  alt=""
                  className="blur"
                />
              </div>
              <div className="absolute -top-60 left-14 z-0 rotate-[17.83]">
                <img
                  src="/images/svg/blue-this-street-icon.svg"
                  alt=""
                  className="blur"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[15.6px] mb-2">
              {/* <FaPlay className="text-white" size={12} /> */}
              <span className="flex gap-[10.4px] mt-2  text-white">
                <img src="/images/svg/play-button.svg" alt="" />
                12:08 <span className="text-[#A1A1AA]">/ 15:00</span>
              </span>
            </div>
            <div className="relative p-[2px] rounded-xl mb-4 bg-gradient-to-r from-[#96547B] via-[#3D2732] to-[#4941D9]">
              <div
                className="bg-gradient-to-br from-[#1e1b2e] to-[#0f0f1c] rounded-[10px] p-4 pb-8 text-[text-[14.44px]] text-gray-100"
                style={{
                  boxShadow: `
        0px 0px 0px 3.09px #6A4DFF29,
        0px 0px 0px 1.03px #FFFFFF1A,
        0px 4.13px 33px -1.03px #7A60FF1F,
        0px 20.63px 30.94px -1.03px #514ADE33,
        0px 51.56px 34.03px 0px #514ADE1F,
        0px 51.56px 24.75px 6.19px #514ADE14
      `,
                }}
              >
                Add on-screen text:{" "}
                <span className="text-white font-medium">
                  "This street? ICONIC."
                </span>{" "}
                in bold white all caps
              </div>
            </div>

            <div className="flex justify-end gap-2 items-center">
              <button className="text-xs px-4 py-2 text-sm font-semibold text-white">
                Cancel
              </button>

              <button className="px-[18px] py-3.5 primary_gradient border border-white rounded-[8px] cursor-pointer text-[#0D0C0F] flex items-center gap-1 font-semibold text-shadow-lg">
                <img
                  src="/images/svg/send-icon.svg"
                  alt="Send"
                  className="w-[15px] h-[16px]"
                />
                <span>Send</span>
              </button>
            </div>
          </div>
          <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4 row-start-2 row-start-3">
            <h3 className="text-lg font-semibold mb-2">Works Anywhere</h3>
            <p className="text-sm text-gray-400 mb-4">
              Cloud renders mean your phone, tablet, or dusty laptop all feel
              pro-level.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="bg-[#1F1F2C] p-4 rounded-xl flex-1">
                <p className="text-xs text-gray-400 mb-2">Share this project</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email address here"
                    className="bg-[#2C2C39] p-2 rounded-lg text-sm w-full focus:outline-none"
                  />
                  <button className="bg-[#8B5CF6] px-4 py-2 rounded-lg text-black font-medium text-sm">
                    →
                  </button>
                </div>
              </div>
              <div className="bg-[#1F1F2C] p-4 rounded-xl flex-1 text-center">
                <p className="text-sm text-gray-300 mb-2">
                  Rendering your video
                </p>
                <p className="text-2xl font-bold mb-1">25%</p>
                <p className="text-xs text-gray-400">
                  Hang in there, this may take a few minutes
                </p>
              </div>
            </div>
          </div>
          {/* Block 2: Studio Grade Polish */}
          <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4">
            <h3 className="text-lg font-semibold mb-2">Studio Grade Polish</h3>
            <p className="text-sm text-gray-400 mb-4">
              Auto-captions, color matching, b-roll search, and motion graphics
              baked in.
            </p>
            <Image
              src="/images/feature-editing-tools.jpg" // replace with actual image
              alt="Studio Tools"
              width={400}
              height={200}
              className="rounded-lg w-full"
            />
          </div>

          {/* Block 3: Quick Access */}
          <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4">
            <h3 className="text-lg font-semibold mb-2">
              Quick Access Moviegen
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Use a shortcut to open the chat AI bar, upload files, auto
              caption, or open timeline.
            </p>
            <div className="bg-[#1B1B27] p-4 rounded-lg text-center text-gray-300">
              <div className="flex justify-center gap-2 mb-2">
                <kbd className="bg-[#2C2C39] px-3 py-1 rounded">⌘</kbd>
                <kbd className="bg-[#2C2C39] px-3 py-1 rounded">Space</kbd>
              </div>
              <p className="text-xs">Press ⌘ + Space to open the chat AI bar</p>
            </div>
          </div>

          {/* Block 4: Lightning Fast Revisions */}
          <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4 relative overflow-hidden">
            <h3 className="text-lg font-semibold mb-2">
              Lightning Fast Revisions
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              “Shorten the intro to 3 s” or “Swap the music for lo-fi beats”
              takes one line.
            </p>
            <div className="absolute right-4 bottom-4 opacity-20">
              <svg width="100" height="100" fill="#8B5CF6" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9v8l10-12h-9z" />
              </svg>
            </div>
          </div>

          {/* Block 5: Works Anywhere */}
        </div>
      </div>
      <div className="bg-[#0b0b0f] min-h-screen p-6 text-white">
        <div className="grid grid-cols-12 gap-6 max-w-screen-xl mx-auto">
          {/* Card 1 - Large Vertical Card */}
          <div className="col-span-4 row-span-2 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl border border-blue-500">
            <p className="text-sm mb-2">Why Creators Switch to Moviegen</p>
            <div className="aspect-video bg-black mb-2 rounded-lg overflow-hidden">
              {" "}
              {/* image or video */}
            </div>
            <p className="text-xs">
              Add on-screen text: “This street? ICONIC.”
            </p>
          </div>

          {/* Card 2 - Horizontal Card */}
          <div className="col-span-8 col-row-1 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl">
            <p className="text-sm mb-2">Studio Grade Polish</p>
            <div className="aspect-video bg-black rounded-lg overflow-hidden"></div>
          </div>

          {/* Card 3 - Small Top Card */}
          <div className="col-span-3 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl">
            <p className="text-sm">Lightning Fast Revisions</p>
          </div>

          {/* Card 4 - Centered Blue Box */}
          <div className="col-start-5 col-span-4 row-span-2 bg-gradient-to-br from-[#0e0e15] to-[#1c1c26] border border-blue-400 p-4 rounded-xl text-center">
            <p className="text-sm mb-2">Quick Access Moviegen</p>
            <div className="grid grid-cols-3 gap-2 text-xs mt-4">
              <div className="border p-2 rounded bg-[#1f1f2e]">⌘</div>
              <div className="border p-2 rounded bg-[#1f1f2e]">Shift</div>
              <div className="border p-2 rounded bg-[#1f1f2e]">Space</div>
            </div>
          </div>

          {/* Card 5 - Bottom Left */}
          <div className="col-span-4 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl">
            <p className="text-sm">Works Anywhere</p>
          </div>

          {/* Card 6 - Bottom Center */}
          <div className="col-span-4 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl">
            <p className="text-sm mb-2">Rendering Preview</p>
            <div className="h-32 bg-black rounded-lg mt-2 flex items-center justify-center text-white">
              25%
            </div>
          </div>

          {/* Card 7 - Bottom Right (with lightning icon placeholder) */}
          <div className="col-span-4 bg-gradient-to-br from-[#1e1e2f] to-[#13131e] p-4 rounded-xl flex items-center justify-center">
            <div className="text-6xl text-purple-500">⚡</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoEditorCards;
