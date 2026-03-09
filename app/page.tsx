import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import TeluguHighlight from "./components/TeluguHighlight";
import Facilities from "./components/Facilities";
import Admissions from "./components/Admissions";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimator from "./components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <TeluguHighlight />
        <Facilities />
        <Admissions />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
