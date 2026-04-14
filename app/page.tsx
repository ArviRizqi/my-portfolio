import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import OtherProjects from "../components/sections/PortfolioSection";
import SkillsSection from "../components/sections/SkillsSection";
import Experience from "../components/sections/EducationExperience";
import CallToAction from "../components/sections/CallToAction";
import Footer from "../components/sections/Footer";
import NavbarSosmed from "../components/sections/NavbarSosmed";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#060b14", color: "#e2e8f0" }}>
      <Navbar />
      <NavbarSosmed />
      <Hero />
      <About />
      <FeaturedProjects />
      <OtherProjects />
      <SkillsSection />
      <Experience />
      <CallToAction />
      <Footer />
    </main>
  );
}
