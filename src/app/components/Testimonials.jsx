"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionTag from "./common/SectionTag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { TwitterIcon, X } from "./common/Icons";
import SwiperCore from "swiper";

const testimonials = [
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Revolut",
    companyLogo: "/images/svg/revolut-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    highlighted: true,
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in sit est netus accumsan. Facilisi elit justo iacinia sapien elementum interdum sodales. Mauris non quisque mollis tempor. Elit.",
  },
  {
    name: "Floyd Miles",
    icon: <X />,
    role: "Founder at Wise",
    companyLogo: "/images/svg/wise-logo.svg",
    profile: "/images/svg/testimonial-profile.svg",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef;

  const handleIconClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="py-20 text-white text-center px-4">
      <div className="max-w-[1236px] mx-auto">
        {/* Header */}
        <div className="common_heading !ff_suisseIntl_medium">
          <SectionTag title="Trusted by Our Users" tagclass="hidden" />
          <h2 className="text-[#E1E7F5] pt-4">What Our Users Are Saying</h2>
        </div>
        <p className="common_para max-w-[550px] lg:max-w-[700px] !font-geist">
          Lorem ipsum dolor sit amet consectetur. Etiam risus adipiscing etiam
          pellentesque. Lorem mauris convallis pretium imperdiet. At lorem.
        </p>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={false}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            className="mySwiper"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                {/* Slide Card Code */}
                <div
                  className={`group rounded-[12px] overflow-hidden relative z-10 h-[210px] cursor-pointer transition-transform duration-500 hover:scale-[1.05] ${
                    item.highlighted
                      ? "transform md:scale-100 text-white"
                      : "text-[#D8DFF0B8]"
                  }`}
                >
                  <div
                    className={`relative h-full rounded-[12px] transition-all duration-300 ${
                      item.highlighted
                        ? ""
                        : "border border-[#44436285] group-hover:border-transparent"
                    }`}
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
                      <p className="!font-geist text-sm mb-3 lg:mb-6 flex-grow text-left">
                        {item.content}
                      </p>
                      <div className="flex justify-between items-center h-fit">
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
                            <p className="!font-geist font-semibold text-sm text-left">
                              {item.name}
                            </p>
                            <p className="text-xs text-[#A8A8A9] !font-geist">
                              {item.role}
                            </p>
                          </div>
                        </div>
                        <Image
                          src={item.companyLogo}
                          alt={item.role}
                          width={90}
                          height={30}
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Blur Effects */}
          <img
            src="/images/svg/testimonial-blur-shadow-1.svg"
            alt="shadow-blur"
            className="absolute z-0 pointer-event-none right-60 transform -translate-y-0.5"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-2.svg"
            alt="shadow-blur"
            className="absolute z-0 pointer-event-none right-80 transform -translate-y-1"
          />
          <img
            src="/images/svg/testimonial-blur-shadow-3.svg"
            alt="shadow-blur"
            className="absolute z-0 pointer-event-none right-130 transform -translate-y-2/5"
          />
        </div>

        <p className="text-base md:text-lg text-[#838AA3] mb-6 !font-geist">
          The world's best user plan with Moviegen
        </p>

        {/* Twitter-style Pagination */}
        {/* Twitter-style Pagination */}
        <div className="flex md:flex-row relative z-10 justify-center gap-3 md:gap-8 items-center">
          {testimonials.map((obj, index) => {
            if (index >= testimonials.length - 2) return null;
            return (
              <div
                key={index}
                onClick={() => handleIconClick(index)}
                className={`cursor-pointer transition-transform duration-300 hover:scale-110`}
              >
                <div
                  className="relative p-10 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(91.18deg, rgba(240, 169, 211, 0.5) 0%, rgba(249, 222, 227, 0.5) 49.52%, rgba(150, 145, 242, 0.5) 100%)",
                    padding: "1px",
                    borderRadius: "9999px",
                    boxShadow:
                      "0px 0px 0px 1px #1B1A22, 0px 8px 8px 0px rgba(163, 126, 242, 0.16)",
                  }}
                >
                  <div className="size-12 rounded-full bg-[#121218] flex items-center justify-center">
                    {obj.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
