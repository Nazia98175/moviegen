"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import { DownArrow, HamburgerIcon } from "./common/Icons";
import { navList } from "./common/Helper";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const className =
    "pb-0.5 font-medium  text-base lg:text-lg flex gap-x-2 text-graya7 transition-all ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-0.5 after:bg-graya7 after:duration-300 duration-300 cursor-pointer font-geist hover:text-[#CD4FF6] flex items-center gap-2 group";
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      document.body.style.height = "100vh";
      html.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      html.style.overflow = "";
      document.body.style.height = "";
      html.style.height = "";
    }
  }, [isOpen]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <Image
          className="absolute left-0 top-0 z-0"
          width="800"
          height="756"
          src="/images/png/blurrblob-head-left.png"
          alt="blurr blob"
        />
        <Image
          className="absolute right-0 top-0 z-0"
          width="1176"
          height="756"
          src="/images/png/blurrblob-head-right.png"
          alt="blurr blob"
        />
        <div className="relative z-50 py-3 sm:py-5 xl:py-8 container px-4 md:px-5 xl:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-center gap-x-[52px] items-center">
              <Link href="/">
                <Image
                  unoptimized
                  className="max-w-[120px] lg:max-w-[140px] xl:max-w-full"
                  width="156"
                  height="48"
                  src="/images/svg/page-logo.svg"
                  alt="logo-image"
                />
              </Link>
              <div className="hidden lg:flex items-center gap-6 lg:gap-8 4xl:gap-14">
                {navList.map((obj, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    ref={openDropdown === index ? dropdownRef : null} // Ref only on active dropdown
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    <button
                      className={` ${
                        openDropdown === index ? "!text-[#CD4FF6]" : ""
                      } ${className}`}
                    >
                      {obj.title}{" "}
                      {obj.submenu && (
                        <span
                          className={`duration-300 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        >
                          <DownArrow
                            className={`group-hover:stroke-[#CD4FF6] duration-300 ${
                              openDropdown === index ? "stroke-[#CD4FF6]" : ""
                            }`}
                          />
                        </span>
                        // <Image
                        //   unoptimized
                        //   className="pt-0.5"
                        //   width="10"
                        //   height="10"
                        //   src="/images/svg/dropdown-icon.svg"
                        //   alt="logo-image"
                        // />
                      )}
                    </button>

                    {obj.submenu && openDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-44 bg-primary rounded shadow-lg z-50 cursor-pointer overflow-hidden shadow-sm shadow-white">
                        {obj.submenu.map((item, i) => (
                          <Link
                            key={i}
                            href={item.url}
                            className={`block px-4 py-2 text-sm text-white hover:bg-[#CD4FF6] duration-300 ${
                              i !== 0 && "border-t border-white/20"
                            }`}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base font-medium font-geist bg-primary  shadow-[#a37ef229] shadow-[0_10px_10px_rgba(163_126_242_0.16)] border border-lightpurple44  p-1 rounded-[12px] cursor-pointer hidden lg:flex">
              <button className="text-grayd8 px-5 cursor-pointer border-none duration-300 hover:text-[#CD4FF6]">
                Sign In
              </button>
              <button className="px-[18px] py-3.5 primary_gradient border border-white rounded-[8px] cursor-pointer duration-300 hover:text-white">
                Join Waitlist
              </button>
            </div>
            <button className="lg:hidden" onClick={toggleOpen}>
              <HamburgerIcon />
            </button>

            <div
              className={`fixed inset-0 bg-primary z-50 transition-transform duration-300 ${
                isOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <MobileHeader
                setOpenDropdown={setOpenDropdown}
                openDropdown={openDropdown}
                dropdownRef={dropdownRef}
                toggleOpen={toggleOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
