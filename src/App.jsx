import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", "about", "journey", "work", "expertise", "recognition", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <Navigation activeSection={activeSection} />

      <main id="main-content">
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.about} />
        <Journey data={portfolioData.journey} />
        <SelectedWork data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Certifications data={portfolioData.certifications} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer data={portfolioData.personal} />
    </div>
  );
}
