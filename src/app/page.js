import BackToTop from "./components/common/BackToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoEditor from "./components/VideoEditor";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoEditor />
<<<<<<< HEAD
      <Pricing />
      {/* <Features /> */}
=======
      <Features />
      <Pricing />
>>>>>>> a97414b52455123852686d035c77aa8d54e7f2b6
      <Testimonials />
      <GetStarted />
      <Footer />
      <BackToTop />
    </>
  );
}
