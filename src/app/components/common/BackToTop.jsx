"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, [scrollValue]);

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTopHandler}
      className={`fixed bottom-[2%] right-[2%] z-40 b flex h-9 sm:h-10 w-9 sm:w-10 items-center bg-primary justify-center overflow-hidden rounded-full hover:shadow-orange-shadow transition-all duration-500  border border-white ${
        showScrollTop ? "scale-100" : "scale-0"
      }`}
    >
      <Image
        src="/images/back-to-top.svg"
        alt="back-to-top"
        height={50}
        width={50}
      />
    </button>
  );
};

export default BackToTop;
