import Link from "next/link";
import React from "react";
import { CrossIcon } from "./common/Icons";
import { navList } from "./common/Helper";

const MobileHeader = ({ toggleOpen }) => {
  const className =
    "text-white pb-0.5 font-medium text-xl 4xl:text-2xl hover:scale-105  duration-300";
  return (
    <>
      <div className=" h-screen w-screen md:hidden flex items-center justify-center flex-col relative">
        <button className="absolute top-7 right-4" onClick={toggleOpen}>
          <CrossIcon />
        </button>
        <div className=" flex flex-col text-center  justify-between gap-6 lg:gap-8 4xl:gap-14">
          {navList.map((obj, index) => (
            <Link key={index} href={obj.url} className={className}>
              {obj.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
