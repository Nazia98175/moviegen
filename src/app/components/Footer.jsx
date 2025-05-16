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
  const privacyclass =
    "font-medium text-xs md:text-base text-gray83 pt-14 md:pt-20 lg:pt-24 xl:pt-28 flex flex-col md:flex-row items-center justify-between px-10 gap-1 ";
  return (
    <footer className="bg-black05 text-white pt-16 md:pt-20 lg:pt-22 pb-6 lg:pb-8 font-geist relative">
      <Image
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        width="1000"
        height="2000"
        src="/images/png/footer-top-line.png"
        alt="dots"
      />
      <div className="container mx-auto flex flex-col items-center text-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            className="max-w-[190px] md:max-w-full"
            src="/images/svg/page-logo.svg"
            width="223"
            height="56"
            alt="logo"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-14 lg:pt-16 text-base lg:text-lg text-gray-300">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex itme-center space-x-6 pt-8 md:pt-10 lg:pt-[52px]">
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

        {/* Bottom Text */}
      </div>
      <div className={privacyclass}>
        <p>© Moviegen, 2025 — All rights reserved</p>
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="">
            Terms of Service
          </a>
          <a href="#" className="flex items-center gap-1 md:gap-3.5">
            <p className="rounded-full bg-gray83 w-1 h-1"></p>
            Privacy Policy
          </a>
          <a href="#" className="flex items-center gap-1 md:gap-3.5">
            <p className="rounded-full bg-gray83 w-1 h-1"></p>
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
