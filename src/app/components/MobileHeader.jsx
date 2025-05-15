import Link from "next/link";
import React from "react";
import { CrossIcon } from "./common/Icons";
import { navList } from "./common/Helper";
import Image from "next/image";

const MobileHeader = ({
  toggleOpen,
  openDropdown,
  dropdownRef,
  setOpenDropdown,
}) => {
  const className =
    "pb-0.5 font-medium flex justify-center text-center items-center text-base lg:text-lg  gap-x-2 text-graya7 transition-all ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-0.5 after:bg-graya7 after:duration-300 duration-300 cursor-pointer font-geist";
  return (
    <>
      <div className=" h-screen w-screen lg:hidden flex items-center justify-center flex-col relative mx-auto">
        <button className="absolute top-7 right-4" onClick={toggleOpen}>
          <CrossIcon />
        </button>
        <div className=" flex flex-col text-center  justify-between gap-6 lg:gap-8 4xl:gap-14">
          {navList.map((obj, index) => (
            <div
              key={index}
              className="relative group cursor-pointer mx-auto"
              ref={openDropdown === index ? dropdownRef : null} // Ref only on active dropdown
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              <button className={className}>
                {obj.title}{" "}
                {obj.submenu && (
                  <Image
                    unoptimized
                    className="pt-0.5"
                    width="10"
                    height="10"
                    src="/images/svg/dropdown-icon.svg"
                    alt="logo-image"
                  />
                )}
              </button>

              {obj.submenu && openDropdown === index && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-grayd8 rounded shadow-lg z-50 cursor-pointer">
                  {obj.submenu.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      className="block px-4 py-2 text-sm text-white hover:bg-secondary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="text-base font-medium font-geist border border-lightpurple44 p-1 rounded-[12px] cursor-pointer ">
            <button className="text-grayd8 px-5 cursor-pointer border-none">
              Sign In
            </button>
            <button className="px-[18px] py-3.5 primary_gradient border border-white rounded-[8px] cursor-pointer">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
