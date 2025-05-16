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
const Footer = () => {
  return (
    <footer className="bg-black05 text-white py-12">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        <div className="flex items-center space-x-2">
          <Image width="223" height="56" alt="logo" />
          {/* <div className="bg-[#8B5CF6] p-2 rounded-md">
            
          </div> */}
          <span className="text-lg font-semibold">MovieGen</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text- text-sm md:text-base lg:text-lg text-gray-300">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400 text-xl">
          <RedditIcon />
          <TwitterIcon />
          <GithubIcon />
          <QIcon />
          <InstaIcon />
        </div>

        {/* Bottom Text */}
        <div className="text-xs text-gray-500 mt-6">
          <p>© Moviegen, 2025 — All rights reserved</p>
          <div className="flex justify-center space-x-4 mt-1">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
