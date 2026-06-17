import { Navbar } from "@/components/layout/Navbar";
import { Particles } from "@/components/layout/Particles";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-portfolio-bg text-portfolio-text">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <FocusAreas />
        <Education />
        <Contact />
      </main>
      <footer className="relative z-10 px-6 py-8 text-center">
        <p className="font-mono text-xs text-portfolio-muted">Built by Rishabh Kala / Delhi, India</p>
      </footer>
    </div>
  );
}
