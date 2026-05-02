import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <div className="noise" />
      <div className="grid-bg" />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Journey />
        <Footer />
      </div>
    </main>
  );
}
