import React from "react";
import {
  GithubIcon,
  InstaIcon,
  QIcon,
  RedditIcon,
  TwitterIcon,
} from "./common/Icons";
import { navLinks } from "./common/Helper";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black05 text-white pt-16 md:pt-20 lg:pt-[100px] font-geist relative">
      <Image
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        width="1000"
        height="2000"
        src="/images/png/footer-top-line.png"
        alt="dots"
      />
      <div className="container mx-auto flex flex-col items-center text-center">
        <Link
          href="/"
          className="flex gap-3.5 font-semibold text-xl md:text-2xl lg:text-[32px] leading-[100%] items-center space-x-2"
        >
          <Image
            className="max-sm:size-10 logo-shadow rounded-[10.80px]"
            src="/images/svg/footer-logo.svg"
            width="56"
            height="56"
            alt="logo"
          />
          MovieGen
        </Link>
        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 md:gap-6 mt-8 md:mt-14 lg:mt-16 text-base lg:text-lg text-grayc9 leading-[100%]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F0A9D3] hover:via-[#F9DEE3] hover:to-[#9691F2] hover:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* SOCIAL ICONS */}
        <div className="flex itme-center space-x-6 mt-6 md:mt-10 lg:mt-[52px]">
          <Link href="https://www.reddit.com/" target="_blank">
            <RedditIcon />
          </Link>
          <Link href="https://x.com/" target="_blank">
            <TwitterIcon />
          </Link>
          <Link href="https://github.com/" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://x.com/" target="_blank">
            <QIcon />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <InstaIcon />
          </Link>
        </div>
      </div>
      {/* PRIVACY AND POLICIES */}
      <div className="font-medium text-xs md:text-base text-gray83 mt-8 md:mt-12 lg:mt-16 xl:mt-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-10 gap-1 py-4 md:py-6 lg:py-8 bg-[#0A0A0F]">
        <p className="leading-[100%] font-medium text-gray83 text-sm sm:text-base">
          © Moviegen, 2025 — All rights reserved
        </p>
        <div className="flex justify-center gap-3 md:space-x-4 max-md:mt-3">
          <Link
            className="leading-[100%] font-medium text-gray83 text-sm sm:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F0A9D3] hover:via-[#F9DEE3] hover:to-[#9691F2] hover:duration-300"
            href={"/"}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 md:gap-3.5 leading-[100%] font-medium text-gray83 text-sm sm:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F0A9D3] hover:via-[#F9DEE3] hover:to-[#9691F2] hover:duration-300"
          >
            <p className="rounded-full bg-gray83 w-1 h-1"></p>
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 md:gap-3.5 leading-[100%] font-medium text-gray83 text-sm sm:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F0A9D3] hover:via-[#F9DEE3] hover:to-[#9691F2] hover:duration-300"
          >
            <p className="rounded-full bg-gray83 w-1 h-1"></p>
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;