"use client";
import React, { useState } from "react";
import SectionTag from "./common/SectionTag";
import Image from "next/image";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const heading = "common_heading";
  const para = "common_para max-w-[550px] lg:max-w-[700px]";
  const plans = {
    monthly: [
      {
        title: "Basic",
        price: "Free",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
      {
        title: "Creator",
        price: "$14.99",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
      {
        title: "Pro",
        price: "$39.99",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
    ],
    annual: [
      {
        title: "Basic",
        price: "Free",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
      {
        title: "Creator",
        price: "$143.90",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
      {
        title: "Pro",
        price: "$383.90",
        features: [
          "40 videos per month",
          "10 mins/video",
          "No watermark",
          "Quality and Complexity",
          "Duration of Video",
          "Up to 3 users",
        ],
      },
    ],
  };
  return (
    <div className="relative pt-28 md:pt-32 lg:pt-40 xl:pt-50">
      <Image
        className="absolute top-0 z-0"
        width="1440"
        height="690"
        src="/images/png/pricing-shades.png"
        alt="shade"
      />
      <Image
        className="absolute top-0 left-1/2  -translate-x-1/2 z-0"
        width="1000"
        height="690"
        src="/images/png/pricing-blurr-center.png"
        alt="shade"
      />
      <div className="text-white px-4 text-center max-w-[1150px] 2xl:max-w-[1060px] 3xl:max-w-[1356px] mx-auto px-4 md:px-5 xl:px-0 relative">
        <SectionTag title="Trusted by Our Users" tagclass="hidden" />
        <div className="text-center">
          <div className={heading}>
            <h1>Pricing Built For</h1>
            <h2 className="text-[#E1E7F5] md:pt-4">Businesses of All Sizes</h2>
          </div>
          <p className={para}>
            Transparent, flexible, and built to scale with your needs because
            clarity matters as much as results.
          </p>
        </div>
        <div className="text-xs sm:text-sm md:text-base font-medium font-geist bg-primary hover: shadow-[#a37ef229] shadow-[0_10px_10px_rgba(163_126_242_0.16)] border border-[#F9DEE380] inner_shadow p-1 rounded-[12px] cursor-pointer mt-8 flex item-center inline-block justify-center mt-10 md:mt-14 lg:mt-16">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-[18px] py-3.5  rounded-[8px] cursor-pointer ${
                billing === "monthly"
                  ? "primary_gradient border-white text-blue0d"
                  : "border-[#D8DFF0D6] text-[#D8DFF0D6] bg-transparent"
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setBilling("annual")}
              className={`px-5 rounded-[8px] cursor-pointer border-none ${
                billing === "annual"
                  ? "primary_gradient text-blue0d"
                  : "text-[#D8DFF0D6] bg-transparent"
              }`}
            >
              Annual Billing{" "}
              <span
                className={`pl-2  ${
                  billing === "annual"
                    ? "text-blue0d"
                    : "text-white bg-transparent"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
          {plans[billing].map((plan, index) => (
            <div
              key={index}
              className={`rounded-[28px] p-2 ${
                plan.title === "Creator"
                  ? "bg-gradient-to-b from-[#070707] to-[#14131A] border border-[#FFFFFF29]"
                  : "bg-gradient-to-b from-[#070707] to-[#14131A] border border-gray-700 border border-[#FFFFFF29]"
              } shadow-md`}
            >
              <div
                className={`rounded-2xl p-6 ${
                  plan.title === "Creator"
                    ? "bg-gradient-to-b from-[#070707] to-[#14131A] border border-[#44436266] shadow-[inset_0_4px_10px_rgba(0_0_0_0.6)] relative overflow-hidden z-10 inner_shadow"
                    : "bg-gradient-to-b from-[#070707] to-[#14131A] border border-gray-700 border border-[#44436266] inner_shadow"
                } shadow-md`}
              >
                <Image
                  className={`absolute bottom-0 left-0 w-full z-[-1] ${
                    plan.title === "Creator" ? "flex" : "hidden"
                  }`}
                  width="320"
                  height="420"
                  src="/images/png/creator-card-blurr.png"
                  alt="pricing-card"
                />
                <h3 className="text-grayd8 text-base md:text-lg lg:text-xl font-medium mb-2 text-gray-300 font-spline-sans-mono">
                  {plan.title}
                </h3>
                <p className="text-secondary text-3xl md:text:4xl lg:text-[40px] font-geist font-medium">
                  {plan.price}{" "}
                  <span className="text-sm md:text-base font-medium font-spline-sans-mono text-[#838AA3]">
                    {plan.title !== "Basic" && "/ month"}
                  </span>
                </p>
                <button
                  className={`w-full py-3.5 rounded-[12px] font-semibold font-geist text-sm md:text-base mt-5 md:mt-6 lg:mt-8 ${
                    plan.title === "Creator"
                      ? "primary_gradient text-blue0d"
                      : "bg-blue15 text-secondary border border-gray44"
                  }`}
                >
                  Get Started Now
                </button>
                <ul
                  className="mt-5 md:mt-6 lg:mt-8 text-sm text-left space-y-4 text-gray-400 
               text-grayd8 font-medium font-geist"
                >
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span>
                        <Image
                          width="18"
                          height="16"
                          src="/images/svg/pricing-star.svg"
                          alt="pricing-star"
                        />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 lg:mt-10 font-geist font-medium text-sm md:text-base lg:text-lg text-grayd8">
          Questions about enterprise or custom pricing?{" "}
          <button className="mt-2 md:mt-0 md:ml-2 px-3 py-[9px] border border-[#F0A9D380] rounded-[8px] text-transparent bg-clip-text bg-gradient-to-r from-[#F0A9D3] via-[#F9DEE3] to-[#9691F2]">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
