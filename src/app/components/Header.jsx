"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import { HamburgerIcon } from "./common/Icons";
import { navList } from "./common/Helper";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const className =
    "text-white pb-0.5 font-medium text-base lg:text-lg xl:text-xl 4xl:text-2xl hover:text-secondary transition-all ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:h-0.5 after:bg-secondary after:duration-300 duration-300";
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

  return (
    <>
      <div className="relative z-50 py-3 sm:py-5 xl:py-10 max-w-[1150px] 2xl:max-w-[1310px] 3xl:max-w-[1406px] 4xl:max-w-[1536px] px-4 md:px-5 xl:px-0 mx-auto">
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
            <div className="hidden md:flex items-center gap-6 lg:gap-8 4xl:gap-14">
              {navList.map((obj, index) => (
                <Link key={index} href={obj.url} className={className}>
                  {obj.title}
                </Link>
              ))}
            </div>
          </div>
          <button className="p-2 bg-white">sign-in</button>
          <button className="md:hidden" onClick={toggleOpen}>
            <HamburgerIcon />
          </button>

          <div
            className={`fixed inset-0 bg-primary z-50 transition-transform duration-300 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <MobileHeader toggleOpen={toggleOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
