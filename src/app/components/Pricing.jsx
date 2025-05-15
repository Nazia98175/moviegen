"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
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
    <section className="bg-[#0f0c1c] text-white py-20 px-4 text-center">
      <div className="mb-4">
        <span className="text-xs bg-[#241d3a] px-3 py-1 rounded-full text-purple-300">
          Trusted by Our Users
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
        Pricing Built For Businesses of All Sizes
      </h2>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Transparent, flexible, and built to scale with your needs because
        clarity matters as much as results.
      </p>

      <div className="mt-8 flex justify-center gap-2">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            billing === "monthly"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
              : "border-gray-600 text-gray-400"
          }`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setBilling("annual")}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            billing === "annual"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
              : "border-gray-600 text-gray-400"
          }`}
        >
          Annual Billing <span className="ml-1">Save 20%</span>
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans[billing].map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 ${
              plan.title === "Creator"
                ? "bg-gradient-to-br from-[#32234c] to-[#2f213e] border border-purple-500"
                : "bg-[#1a1a2e] border border-gray-700"
            } shadow-md`}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-300">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}{" "}
              <span className="text-sm font-normal">
                {plan.title !== "Basic" && "/ month"}
              </span>
            </p>
            <button
              className={`w-full py-2 rounded-lg ${
                plan.title === "Creator"
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              Get Started Now
            </button>
            <ul className="mt-6 text-sm text-left space-y-2 text-gray-400">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-400">✦</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-400">
        Questions about enterprise or custom pricing?{" "}
        <button className="ml-2 px-4 py-2 border border-purple-500 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default Pricing;
