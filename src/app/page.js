import Image from "next/image";
import BackToTop from "./components/common/BackToTop";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import VideoEditor from "./components/VideoEditor";
import VideoEditorHero from "./components/VideoEditorHero";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Image
          className="w-full max-w-[952px] absolute left-1/2  translate-x-[-50%] top-[30%] z-[0]"
          src={"/images/png/hero-bg-blur.png"}
          height={100}
          width={400}
          alt="hero-bg-blur"
        />
        <Hero />
        <VideoEditor />
      </main>
      <VideoEditorHero />
      <Features />
      <Pricing />
      <Testimonials />
      <GetStarted />
      <Footer />
      <BackToTop />
      {/* <GridPreview /> */}
    </>
  );
}
