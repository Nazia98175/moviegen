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
  const heading = "common_heading !font-suisseintl !font-medium";
  const para = "common_para max-w-[550px] lg:max-w-[700px] !font-geist";
  return (
    <section className="py-20 text-white text-center px-4">
      <div className="max-w-[1236px] mx-auto">
        <div className={heading}>
          <SectionTag title="Trusted by Our Users" tagclass="hidden" />
          <h2 className="text-[#E1E7F5] pt-4">What Our Users Are Saying</h2>
        </div>
        <p className={para}>
          Lorem ipsum dolor sit amet consectetur. Etiam risus adipiscing etiam
          pellentesque. Lorem mauris convallis pretium imperdiet. At lorem.
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-8 relative mt-20">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`
                group rounded-[12px] overflow-hidden relative z-10 
                w-full max-w-[372px] mx-auto 
                h-[210px] cursor-pointer hover:max-w-[428px] hover:[256px]
                transition-transform duration-300 
                hover:scale-[1.15] 
                ${item.highlighted ? "transform md:scale-100" : ""}
              `}
            >
              <div
                className={`relative h-full rounded-[12px] transition-all duration-300
          ${
            item.highlighted
              ? ""
              : "border border-[#44436285] group-hover:border-transparent"
          }
        `}
                style={{
                  ...(item.highlighted
                    ? {
                        background:
                          "linear-gradient(91.18deg, rgba(240, 169, 211, 0.5) 0%, rgba(249, 222, 227, 0.5) 49.52%, rgba(150, 145, 242, 0.5) 100%)",
                        padding: "1px",
                        boxShadow:
                          "0px 0px 0px 1px #1B1A22, 0px 8px 8px 0px rgba(163, 126, 242, 0.16)",
                      }
                    : { boxShadow: "0px 0px 0px 1px #1B1A22" }),
                }}
              >
                {!item.highlighted && (
                  <div
                    className="absolute inset-0 rounded-[12px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(91.18deg, rgba(240, 169, 211, 0.5) 0%, rgba(249, 222, 227, 0.5) 49.52%, rgba(150, 145, 242, 0.5) 100%)",
                      padding: "1px",
                      zIndex: 1,
                    }}
                  />
                )}

                <div className="bg-[#121218] h-full rounded-[12px] px-4 md:px-2 lg:px-4 py-6 md:py-2 lg:py-6 flex flex-col relative z-10">
                  <p className=" !font-geist text-sm mb-3 lg:mb-6 flex-grow text-left">
                    {item.content}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 lg:gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                        <Image
                          src={item.profile}
                          alt={item.name}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div>
                        <p className=" !font-geist font-semibold text-sm text-left">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#A8A8A9]  !font-geist">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <Image
                      src={item.companyLogo}
                      alt={item.role}
                      width={90} // Always set max width for Next.js optimization
                      height={30} // Always set max height for Next.js optimization
                      className={
                        item.highlighted
                          ? "w-[60px] h-[20px] lg:w-[90px] lg:h-[30px]"
                          : "w-[60px] h-[20px]"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blur shadows */}
          <img
            src="/images/svg/testimonial-blur-shadow-1.svg"
            alt="shadow-blur"
            className="absolute z-10 right-60 transform -translate-y-0.5"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-2.svg"
            alt="shadow-blur"
            className="absolute z-10 right-80 transform -translate-y-1"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-3.svg"
            alt="shadow-blur"
            className="absolute z-0 right-130 transform -translate-y-2/5"
          />
        </div>

        <p className="text-sm text-[#838AA3] mt-14 mb-6  !font-geist">
          The world's best user plan with Moviegen
        </p>

        {/* X/Twitter Pagination with Gradient Border */}
        <div className="flex md:flex-row justify-center gap-3 md:gap-8 items-center">
          {Array.from({ length: 9 }).map((_, i) => {
            // On mobile, only show icons 3, 4, and 5 (the middle one and its neighbors)
            const showOnMobile = i >= 3 && i <= 5;
            return (
              <div
                className={`${
                  i === 4
                    ? "p-10 flex items-center justify-center relative cursor-pointer"
                    : "flex items-center justify-center cursor-pointer"
                } ${!showOnMobile ? "hidden md:flex" : ""} transition-transform duration-300 hover:scale-110`}
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
