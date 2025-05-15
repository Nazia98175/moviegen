import Image from "next/image";
import BackToTop from "./components/common/BackToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BackToTop />
    </>
  );
}
