import BackToTop from "./components/common/BackToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoEditor from "./components/VideoEditor";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoEditor />
      <Pricing />
      <Features />
      <Testimonials />
      <Footer />
      <BackToTop />
    </>
  );
}
