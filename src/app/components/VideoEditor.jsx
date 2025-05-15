import React from "react";
import SectionTag from "./common/SectionTag";
import Image from "next/image";

const VideoEditor = () => {
  const heading = "common_heading";
  const para = "common_para max-w-[550px] lg:max-w-[700px]";
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-32">
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
        <section className="bg-[#0B0B0F] py-20 px-4 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Block 1: Left Column Large Card */}
            <div className="bg-gradient-to-b from-[#1C1C24] to-[#101017] border border-[#1f1f2b] rounded-2xl p-4 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">
                Why Creators Switch to Moviegen
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Zero software, zero learning curve – open a chat, say what you
                need, edit your videos.
              </p>
              <div className="relative rounded-xl overflow-hidden mb-3">
                <Image
                  src="/images/feature-video-thumbnail.jpg" // replace with actual image
                  alt="feature"
                  width={600}
                  height={300}
                  className="w-full"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs">
                  This street?{" "}
                  <span className="text-indigo-400 font-bold">ICONIC.</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                {/* <FaPlay className="text-white" size={12} /> */}
                <span>12:08 / 15:00</span>
              </div>
              <div className="bg-[#121218] p-3 rounded-xl text-xs text-gray-300 mb-2">
                Add on-screen text: "This street? ICONIC." in bold white all
                caps
              </div>
              <div className="flex justify-between items-center">
                <button className="text-xs text-gray-500">Cancel</button>
                <button className="bg-[#8B5CF6] px-4 py-2 rounded-full text-sm font-medium text-black">
                  Send
                </button>
              </div>
            </div>

            {/* Block 2: Studio Grade Polish */}
            <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4">
              <h3 className="text-lg font-semibold mb-2">
                Studio Grade Polish
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Auto-captions, color matching, b-roll search, and motion
                graphics baked in.
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
                <p className="text-xs">
                  Press ⌘ + Space to open the chat AI bar
                </p>
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
                <svg
                  width="100"
                  height="100"
                  fill="#8B5CF6"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h9v8l10-12h-9z" />
                </svg>
              </div>
            </div>

            {/* Block 5: Works Anywhere */}
            <div className="bg-[#121218] border border-[#1f1f2b] rounded-2xl p-4 col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Works Anywhere</h3>
              <p className="text-sm text-gray-400 mb-4">
                Cloud renders mean your phone, tablet, or dusty laptop all feel
                pro-level.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-[#1F1F2C] p-4 rounded-xl flex-1">
                  <p className="text-xs text-gray-400 mb-2">
                    Share this project
                  </p>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoEditor;
