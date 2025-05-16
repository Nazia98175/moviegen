import React from "react";
import Image from "next/image";
import SectionTag from "./common/SectionTag";

const testimonials = [
  {
    name: "Floyd Miles",
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    role: "Founder at Revolut",
    companyLogo: "/images/svg/revolut-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    highlighted: true,
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
];

const Testimonials = () => {
  const heading = "common_heading";
  return (
    <section className="py-20 text-white text-center px-4">
      <div className="max-w-5xl mx-auto">
        <div className={heading}>
          <SectionTag title="Trusted by Our Users" tagclass="hidden" />

          <h2 className="text-[#E1E7F5] md:pt-4">What Our Users Are Saying</h2>
        </div>
        <p className="text-[#D8DFF0]/80 max-w-2xl mx-auto mb-12 mt-4 max-w-[560px]">
          Lorem ipsum dolor sit amet consectetur. Etiam risus adipiscing etiam
          pellentesque. Lorem mauris convallis pretium imperdiet. At lorem.
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden relative z-10 ${
                item.highlighted ? "transform md:scale-108" : ""
              }`}
            >
              {item.highlighted ? (
                <div
                  className="h-full"
                  style={{
                    background:
                      "linear-gradient(91.18deg, rgba(240, 169, 211, 0.5) 0%, rgba(249, 222, 227, 0.5) 49.52%, rgba(150, 145, 242, 0.5) 100%)",
                    padding: "1px",
                    boxShadow:
                      "0px 0px 0px 1px #1B1A22, 0px 8px 8px 0px rgba(163, 126, 242, 0.16)",
                  }}
                >
                  <div className="bg-[#121218] h-full rounded-2xl px-4 py-6 flex flex-col">
                    <p className="text-sm mb-6 flex-grow">{item.content}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                          <Image
                            src={item.profile}
                            alt={item.name}
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-left">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#A8A8A9]">{item.role}</p>
                        </div>
                      </div>
                      {/* Larger size for Revolut logo */}
                      <Image
                        src={item.companyLogo}
                        alt={item.role}
                        width={90}
                        height={30}
                        className="transform scale-100"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="h-full border border-[#44436285] rounded-2xl p-0"
                  style={{
                    boxShadow: "0px 0px 0px 1px #1B1A22",
                  }}
                >
                  <div className="bg-[#121218] h-full rounded-2xl px-4 py-6 flex flex-col">
                    <p className="text-sm text-gray-300 mb-6 flex-grow">
                      {item.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                          <Image
                            src={item.profile}
                            alt={item.name}
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-left text-sm">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#A8A8A9]">{item.role}</p>
                        </div>
                      </div>
                      <Image
                        src={item.companyLogo}
                        alt={item.role}
                        width={60}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <img
            src="/images/svg/testimonial-blur-shadow-1.svg"
            alt=""
            className="absolute z-0 right-48 transform -translate-y-0.5"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-2.svg"
            alt=""
            className="absolute z-0 right-60 transform -translate-y-1"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-3.svg"
            alt=""
            className="absolute z-0 right-96 transform -translate-y-2/5"
          />
        </div>

        <p className="text-sm text-[#838AA3] mt-14 mb-6">
          The world's best user plan with Moviegen
        </p>

        {/* X/Twitter Pagination with Gradient Border */}
        <div className="flex md:flex-row justify-center gap-4 md:gap-8 items-center">
          {Array.from({ length: 9 }).map((_, i) => {
            // On mobile, only show icons 3, 4, and 5 (the middle one and its neighbors)
            const showOnMobile = i >= 2 && i <= 6;
            return (
              <div
                key={i}
                className={`${
                  i === 4
                    ? "p-10 flex items-center justify-center relative"
                    : "flex items-center justify-center"
                } ${!showOnMobile ? "hidden md:flex" : ""}`}
              >
                {i === 4 ? (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(91.18deg, rgba(240, 169, 211, 0.5) 0%, rgba(249, 222, 227, 0.5) 49.52%, rgba(150, 145, 242, 0.5) 100%)",
                      padding: "1px",
                      boxShadow:
                        "0px 0px 0px 1px #1B1A22, 0px 8px 8px 0px rgba(163, 126, 242, 0.16)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#121218] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 38 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="z-10"
                      >
                        <path
                          d="M0.133767 0.500488L14.7729 19.8053L0.0415035 35.5005L3.35722 35.5005L16.2549 21.7588L26.6754 35.5005L37.9582 35.5005L22.495 15.1101L36.2071 0.500489L32.8914 0.500489L21.0137 13.1559L11.4165 0.500488L0.133767 0.500488ZM5.00967 2.90959L10.1929 2.90959L33.0816 33.092L27.8984 33.092L5.00967 2.90959Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div
                    className="p-4 rounded-full border border-[#44436285] flex items-center justify-center"
                    style={{ boxShadow: "0px 0px 0px 1px #1B1A22" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 38 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="z-10"
                    >
                      <path
                        d="M0.133767 0.500488L14.7729 19.8053L0.0415035 35.5005L3.35722 35.5005L16.2549 21.7588L26.6754 35.5005L37.9582 35.5005L22.495 15.1101L36.2071 0.500489L32.8914 0.500489L21.0137 13.1559L11.4165 0.500488L0.133767 0.500488ZM5.00967 2.90959L10.1929 2.90959L33.0816 33.092L27.8984 33.092L5.00967 2.90959Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
