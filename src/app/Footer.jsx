import React from "react";
// import {
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaDiscord,
//   FaGlobe,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] text-white py-12">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Logo & Name */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#8B5CF6] p-2 rounded-md">
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 2L2 7v7c0 5 4 9 10 9s10-4 10-9V7l-10-5z" />
            </svg>
          </div>
          <span className="text-lg font-semibold">MovieGen</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">Articles</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Social Icons */}
        {/* <div className="flex space-x-6 text-gray-400 text-xl">
          <FaTwitter className="hover:text-white" />
          <FaYoutube className="hover:text-white" />
          <FaInstagram className="hover:text-white" />
          <FaDiscord className="hover:text-white" />
          <FaGlobe className="hover:text-white" />
        </div> */}

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
