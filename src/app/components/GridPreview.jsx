"use client";
import { useState } from "react";

function PlaceholderImage({ className }) {
  return (
    <div
      className={`relative ${
        className || "h-40"
      } bg-purple-800 overflow-hidden`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-purple-700/70 to-purple-900/70"></div>
      </div>
      <div className="absolute bottom-3 left-3 bg-black/30 backdrop-blur px-2 py-1 rounded text-xs">
        02:08 / 17:31
      </div>
    </div>
  );
}

export default function GridPreview() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Features Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Why Creators Switch */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl">
          <PlaceholderImage />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Why Creators Switch to Motionleap
            </h3>
            <p className="text-sm text-gray-300">
              Top creators share their stories: why they made the switch to
              Motionleap and never looked back.
            </p>
          </div>
          <div className="flex items-center justify-between p-4 border-t border-purple-700">
            <div>
              <button
                onClick={() => setSaved(!saved)}
                className="px-3 py-1 text-sm rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                {saved ? "Saved" : "Save"}
              </button>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Studio-Grade Finish */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl">
          <PlaceholderImage />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Studio-Grade Finish</h3>
            <p className="text-sm text-gray-300">
              AI-powered color grading, smart depth mapping, and professional
              effects that elevate your content in seconds.
            </p>
          </div>
        </div>

        {/* Card 3 - Quick Access */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl row-span-2 flex flex-col">
          <div className="p-6 flex-grow">
            <h3 className="text-lg font-semibold mb-4">
              Quick Access Motionleap
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Create stunning visual content in minutes. Select how you want to
              start your creative journey:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="bg-purple-700 hover:bg-purple-600 transition-colors rounded-md py-2 px-3 text-sm">
                Templates
              </button>
              <button className="bg-purple-800 hover:bg-purple-700 transition-colors rounded-md py-2 px-3 text-sm">
                Blank
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-purple-700 text-xs text-gray-400">
            <div className="flex items-center justify-between">
              <span>Profile</span>
              <div className="flex items-center gap-2">
                <span>Pro</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-purple-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-xs">14 days free trial for Pro</div>
          </div>
        </div>

        {/* Card 4 - Lightning Fast Rendering */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl">
          <PlaceholderImage />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Lightning Fast Rendering
            </h3>
            <p className="text-sm text-gray-300">
              Render 10x faster (4K, 8K), utilize the cloud for batch renders,
              and export to multiple formats simultaneously.
            </p>
          </div>
        </div>

        {/* Card 5 - Weekly Advantage */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Weekly Advantage</h3>
            <p className="text-sm text-gray-300 mb-4">
              Cloud renders unlock more creative options, better quality output,
              and faster turnaround for your projects.
            </p>

            <div className="flex justify-center my-4">
              <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-xl font-bold">
                25%
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="space-y-2">
                <div className="text-xs text-gray-400">Credits for export</div>
                <div className="h-2 w-full bg-purple-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 - Audio Visualization */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Audio Visualization</h3>
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full space-y-1">
                {Array(8)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="flex space-x-1">
                      {Array(20)
                        .fill()
                        .map((_, j) => {
                          const heightClass =
                            Math.random() > 0.5
                              ? "h-1"
                              : Math.random() > 0.7
                              ? "h-2"
                              : "h-3";
                          const widthClass =
                            Math.random() > 0.7
                              ? "w-6"
                              : Math.random() > 0.4
                              ? "w-4"
                              : "w-2";
                          const colorClass =
                            Math.random() > 0.5
                              ? "bg-purple-500"
                              : "bg-purple-800";
                          return (
                            <div
                              key={j}
                              className={`${heightClass} rounded-full ${colorClass} ${widthClass}`}
                            ></div>
                          );
                        })}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
