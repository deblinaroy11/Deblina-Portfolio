/**
 * Home page — single-page portfolio replicating the reference QA portfolio
 * design (light theme, blue primary, rounded cards) with Deblina Roy's
 * resume content. Section order: Hero → Expertise → Skills → Experience →
 * Projects → Education → Contact → Footer.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
