import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About"
import Experience from "../components/sections/EducationExperience";
import PortfolioSection from "../components/sections/PortfolioSection";
import CallToAction from "../components/sections/CallToAction";
import Footer from "../components/sections/Footer";
import NavbarSosmed from "../components/sections/NavbarSosmed"

export default function Home() {
  return (
    <main className="min-h-screen bg-bgDark text-slate-100">
      <Navbar />
      <NavbarSosmed />
      <Hero />
      <About />
      <Experience />
      <PortfolioSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
