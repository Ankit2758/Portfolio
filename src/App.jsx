import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('Midnight');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  const cycleTheme = () => {
    const themes = ['Midnight', 'Cyberpunk', 'Emerald'];
    const nextIndex = (themes.indexOf(activeTheme) + 1) % themes.length;
    setActiveTheme(themes[nextIndex]);
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-[#38bdf8] selection:text-black">
      <Navbar activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <main>
        <Hero onThemeClick={cycleTheme} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
