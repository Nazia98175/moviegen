import React from "react";
import Image from "next/image";
import SectionTag from "./common/SectionTag";

const testimonials = [
  {
    name: "Floyd Miles",
    role: "Founder at Wise",
    companyLogo: "/images/wise-logo.png", // Replace with actual path
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in et est neque accumsan. Facilisi elit justo iaculis sapien elementum interdum sodales. Mauris non quisque mollis tempor elit.",
  },
  {
    name: "Floyd Miles",
    role: "Founder at Revolut",
    companyLogo: "/images/revolut-logo.png", // Replace with actual path
    highlighted: true,
    content:
      "Lorem ipsum dolor sit amet consectetur. Pretium interdum suscipit pellentesque elementum ultricies id. A id nisl ullamcorper nulla at. Elit eget arcu in urna. Amet nisl vel tristique sem et ut.",
  },
  {
    name: "Floyd Miles",
    role: "Founder at Wise",
    companyLogo: "/images/wise-logo.png", // Replace with actual path
    content:
      "Lorem ipsum dolor sit amet consectetur. Cras in et est neque accumsan. Facilisi elit justo iaculis sapien elementum interdum sodales. Mauris non quisque mollis tempor elit.",
  },
];

const Testimonials = () => {
  const heading = "common_heading";
  return (
    <section className="bg-[#0B0B0F] py-20 text-white text-center px-4">
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
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border border-[#1F1F2B] p-6 text-left ${
                item.highlighted
                  ? "bg-gradient-to-b from-[#1C1C24] to-[#101017] shadow-md shadow-[#8B5CF6]/30 border-[#8B5CF6]"
                  : "bg-[#121218]"
              }`}
            >
              <p className="text-sm text-gray-300 mb-6">{item.content}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
                <Image
                  src={item.companyLogo}
                  alt={item.role}
                  width={60}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border border-[#333]
                flex items-center justify-center text-white text-xs ${
                  i === 5
                    ? "bg-[#8B5CF6] text-black border-none scale-110"
                    : "bg-transparent"
                }`}
            >
              X
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          The world's best user plan with Moviegen
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
