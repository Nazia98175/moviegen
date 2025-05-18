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
      <Hero />
      <VideoEditor />
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
